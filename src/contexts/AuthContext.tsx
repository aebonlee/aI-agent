import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useToast } from './ToastContext';
import { useLanguage } from './LanguageContext';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();
  const { t } = useLanguage();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
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

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signInWithKakao, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
