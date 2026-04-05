import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <SEOHead title={t('notFound.title')} path="/404" />
      <div className="not-found-content">
        <div className="not-found-icon">
          <i className="fa-solid fa-robot" aria-hidden="true" />
        </div>
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">{t('notFound.title')}</h1>
        <p className="not-found-desc">{t('notFound.desc')}</p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            <i className="fa-solid fa-house" aria-hidden="true" /> {t('notFound.home')}
          </Link>
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left" aria-hidden="true" /> {t('notFound.back')}
          </button>
        </div>
      </div>
    </div>
  );
}
