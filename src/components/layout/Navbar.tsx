import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';

export default function Navbar() {
  const { mode, toggleTheme, colorTheme, setColorTheme, COLOR_OPTIONS } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { user, signOut } = useAuth();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showMobileColorPicker, setShowMobileColorPicker] = useState(false);
  const colorPickerRef = useRef(null);
  const mobileColorPickerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) setShowColorPicker(false);
      if (mobileColorPickerRef.current && !mobileColorPickerRef.current.contains(e.target)) setShowMobileColorPicker(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeIcon = mode === 'auto' ? '◑' : mode === 'light' ? '☀️' : '🌙';

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="메인 네비게이션">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-agent">AI Agents</span>
            <span className="logo-lab">Work Lab</span>
          </Link>

          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/learning" className={`nav-link ${location.pathname === '/learning' ? 'active' : ''}`}>
                {t('nav.learning')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/course" className={`nav-link ${location.pathname === '/course' ? 'active' : ''}`}>
                {t('nav.course')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/prompts" className={`nav-link ${location.pathname === '/prompts' ? 'active' : ''}`}>
                {t('nav.prompts')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cases" className={`nav-link ${location.pathname === '/cases' ? 'active' : ''}`}>
                {t('nav.cases')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}>
                {t('nav.faq')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/community" className={`nav-link ${location.pathname === '/community' ? 'active' : ''}`}>
                {t('nav.community')}
              </Link>
            </li>
          </ul>

          <div className="navbar-actions">
            <div className="color-picker-wrapper" ref={colorPickerRef}>
              <button
                className="color-picker-btn"
                onClick={() => setShowColorPicker(!showColorPicker)}
                title="Color Theme"
                aria-expanded={showColorPicker}
                aria-haspopup="true"
                aria-label="컬러 테마 선택"
              >
                <div className="color-dot-preview" style={{ background: COLOR_OPTIONS.find(c => c.name === colorTheme)?.color }} />
              </button>
              <div className={`color-picker-dropdown ${showColorPicker ? 'show' : ''}`}>
                {COLOR_OPTIONS.map(opt => (
                  <button
                    key={opt.name}
                    className={`color-option ${colorTheme === opt.name ? 'active' : ''}`}
                    style={{ background: opt.color }}
                    onClick={() => { setColorTheme(opt.name); setShowColorPicker(false); }}
                    title={opt.name}
                    aria-label={opt.name}
                  />
                ))}
              </div>
            </div>

            <button className="theme-toggle" onClick={toggleTheme} title={mode} aria-label="테마 변경">
              {themeIcon}
            </button>

            <button className="lang-toggle" onClick={toggleLanguage} aria-label="언어 전환">
              {language === 'ko' ? 'EN' : 'KO'}
            </button>

            {user ? (
              <div className="user-menu">
                {user.user_metadata?.avatar_url && (
                  <img src={user.user_metadata.avatar_url} alt="" className="user-avatar" />
                )}
                <button className="logout-btn" onClick={signOut}>{t('nav.logout')}</button>
              </div>
            ) : (
              <Link to="/login" className="login-link">
                <i className="fa-solid fa-right-to-bracket" /> {t('nav.login')}
              </Link>
            )}

            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="메뉴 열기/닫기"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} id="mobile-menu" aria-hidden={!isMobileMenuOpen}>
        <ul className="mobile-nav-links">
          <li><Link to="/learning" className="mobile-nav-link">{t('nav.learning')}</Link></li>
          <li><Link to="/course" className="mobile-nav-link">{t('nav.course')}</Link></li>
          <li><Link to="/prompts" className="mobile-nav-link">{t('nav.prompts')}</Link></li>
          <li><Link to="/cases" className="mobile-nav-link">{t('nav.cases')}</Link></li>
          <li><Link to="/faq" className="mobile-nav-link">{t('nav.faq')}</Link></li>
          <li><Link to="/community" className="mobile-nav-link">{t('nav.community')}</Link></li>
          <li>
            {user ? (
              <button className="mobile-nav-link" onClick={signOut} style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}>
                {t('nav.logout')}
              </button>
            ) : (
              <Link to="/login" className="mobile-nav-link">{t('nav.login')}</Link>
            )}
          </li>
        </ul>
        <div className="mobile-menu-actions">
          <div className="color-picker-wrapper" ref={mobileColorPickerRef}>
            <button
              className="color-picker-btn"
              onClick={() => setShowMobileColorPicker(!showMobileColorPicker)}
              title="Color Theme"
              aria-label="컬러 테마 선택"
            >
              <div className="color-dot-preview" style={{ background: COLOR_OPTIONS.find(c => c.name === colorTheme)?.color }} />
            </button>
            <div className={`color-picker-dropdown ${showMobileColorPicker ? 'show' : ''}`}>
              {COLOR_OPTIONS.map(opt => (
                <button
                  key={opt.name}
                  className={`color-option ${colorTheme === opt.name ? 'active' : ''}`}
                  style={{ background: opt.color }}
                  onClick={() => { setColorTheme(opt.name); setShowMobileColorPicker(false); }}
                  title={opt.name}
                  aria-label={opt.name}
                />
              ))}
            </div>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} title={mode} aria-label="테마 변경">
            {themeIcon}
          </button>
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="언어 전환">
            {language === 'ko' ? 'EN' : 'KO'}
          </button>
        </div>
      </div>
    </>
  );
}
