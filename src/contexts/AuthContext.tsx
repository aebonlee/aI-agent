import {createContext, useContext, useEffect, useState, useCallback} from 'react';
import { supabase, setSharedSession, getSharedSession, clearSharedSession } from '../lib/supabase';
import { isAdmin as isAdminEmail } from '../config/admin';
import { useToast } from './ToastContext';
import { useLanguage } from './LanguageContext';
import { useIdleTimeout } from '../hooks/useIdleTimeout';
import ProfileCompleteModal from '../components/ProfileCompleteModal';

import PaymentNudgePopup from '../components/PaymentNudgePopup';
const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [_userProfile, _setUserProfile] = useState<any>(null);
  const { showToast }: any = useToast();
  const { t }: any = useLanguage();

  
  // ─── 프로필 완성 체크용 user_profiles 로드 ───
  const _loadUserProfile = useCallback(async (uid: string) => {
    try {
      const { data } = await supabase!.from('user_profiles').select('name,phone').eq('id', uid).maybeSingle();
      _setUserProfile(data);
    } catch { _setUserProfile(null); }
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.refresh_token) {
        setSharedSession(session.refresh_token);
      } else {
        const rt = getSharedSession();
        if (rt) {
          try {
            const { data } = await supabase.auth.refreshSession({ refresh_token: rt });
            if (!data.session) clearSharedSession();
          } catch { clearSharedSession(); }
        }
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.refresh_token) setSharedSession(session.refresh_token);
      if (_event === 'SIGNED_OUT') clearSharedSession();

      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      if (error) {
        console.error('Google login error:', error.message);
        showToast(t('toast.loginError'), 'error');
      }
    } catch (err: any) {
      console.error('Google login error:', err);
      showToast(t('toast.loginError'), 'error');
    }
  };

  const signInWithKakao = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      if (error) {
        console.error('Kakao login error:', error.message);
        showToast(t('toast.loginError'), 'error');
      }
    } catch (err: any) {
      console.error('Kakao login error:', err);
      showToast(t('toast.loginError'), 'error');
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error.message);
        showToast(t('toast.logoutError'), 'error');
      } else {
        showToast(t('toast.logoutSuccess'), 'success');
      }
    } catch (err: any) {
      console.error('Logout error:', err);
      showToast(t('toast.logoutError'), 'error');
    }
  };


  // 10분 무동작 세션 타임아웃
  useIdleTimeout({
  enabled: !!user,
  onTimeout: () => {
  supabase?.auth.signOut();
  clearSharedSession();
  },
  });
  const refreshProfile = useCallback(async () => { if (user) await _loadUserProfile(user.id); }, [user, _loadUserProfile]);
  const needsProfileCompletion = !!user && !!_userProfile && !_userProfile.name;


  return (
    <AuthContext.Provider value={{ user, loading, isAdmin: isAdminEmail(user?.email), signInWithGoogle, signInWithKakao, signOut }}>
      {children}
      {needsProfileCompletion && user && (
        <ProfileCompleteModal user={user} onComplete={refreshProfile} />
      )}
    {!!user && !needsProfileCompletion && (
      <PaymentNudgePopup user={user} siteSlug="ai-agents" />
    )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
