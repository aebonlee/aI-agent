import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="footer" aria-label="사이트 푸터">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-agent">AI Agent</span>
              <span className="brand-lab">Work Lab</span>
            </div>
            <p className="footer-description">{t('footer.description')}</p>
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-link-list">
              <li><Link to="/learning">{t('nav.learning')}</Link></li>
              <li><Link to="/course">{t('nav.course')}</Link></li>
              <li><Link to="/curriculum">{t('nav.curriculum')}</Link></li>
              <li><Link to="/materials">{t('nav.materials')}</Link></li>
              <li><Link to="/prompts">{t('nav.prompts')}</Link></li>
              <li><Link to="/cases">{t('nav.cases')}</Link></li>
              <li><Link to="/results">{t('nav.results')}</Link></li>
              <li><Link to="/faq">{t('nav.faq')}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t('footer.contact')}</h4>
            <p className="footer-email">
              <span className="footer-email-icon">✉️</span>
              <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
            </p>
            <p>010-3700-0629</p>
            <p className="business-hours">{t('footer.businessHours')}</p>

            <div className="footer-family">
              <select
                defaultValue=""
                aria-label="패밀리 사이트"
                onChange={(e) => {
                  if (e.target.value) window.open(e.target.value, '_blank');
                  e.target.value = '';
                }}
              >
                <option value="" disabled>Family Site</option>
                <option value="https://www.dreamitbiz.com">DreamIT Biz</option>
                <option value="https://teaching.dreamitbiz.com">Teaching AI</option>
                <option value="https://planning.dreamitbiz.com">Planning Academy</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 DreamIT Biz. All rights reserved.</p>
          <p className="footer-bottom-info">
            Designed by Ph.D Aebon Lee | {language === 'ko' ? '대표이사' : 'CEO'}: {language === 'ko' ? '이애본' : 'Aebon Lee'} | {language === 'ko' ? '사업자등록번호' : 'Business Reg.'}: 601-45-20154
          </p>
        </div>
      </div>
    </footer>
  );
}
