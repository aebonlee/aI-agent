import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import HeroCarousel from '../components/HeroCarousel';

export default function Home() {
  const { language, t } = useLanguage();
  const ko = language === 'ko';

  const KEY_VALUES = [
    { icon: 'fa-layer-group', color: '#1B3A6B' },
    { icon: 'fa-industry', color: '#3D6DB5' },
    { icon: 'fa-flask', color: '#00855A' },
    { icon: 'fa-expand', color: '#C87200' },
  ];

  const WORKFLOW_STEPS = [
    { icon: 'fa-brain' },
    { icon: 'fa-pencil-ruler' },
    { icon: 'fa-robot' },
    { icon: 'fa-rocket' },
  ];

  const TARGETS = [
    { icon: 'fa-building-columns' },
    { icon: 'fa-bolt' },
    { icon: 'fa-microchip' },
    { icon: 'fa-user-tie' },
    { icon: 'fa-users' },
  ];

  return (
    <>
      <SEOHead path="/" />
      <HeroCarousel />

      {/* Key Values Section */}
      <section className="home-features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('home.keyValueBadge')}</span>
            <h2 className="section-title">{t('home.keyValueTitle')}</h2>
          </div>
          <div className="home-features-grid">
            {KEY_VALUES.map((item, i) => (
              <div key={i} className="home-feature-card" style={{ borderLeftColor: item.color }}>
                <div className="home-feature-icon">
                  <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                </div>
                <h4>{t(`home.keyValue${i + 1}Title`)}</h4>
                <p>{t(`home.keyValue${i + 1}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="home-workflow-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('home.workflowBadge')}</span>
            <h2 className="section-title">{t('home.workflowTitle')}</h2>
          </div>
          <div className="home-workflow-grid">
            {WORKFLOW_STEPS.map((item, i) => (
              <div key={i} className="home-workflow-step">
                <div className="home-workflow-icon">
                  <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                </div>
                <div className="home-workflow-step-num">{t(`home.step${i + 1}Num`)}</div>
                <h4>{t(`home.step${i + 1}Title`)}</h4>
                <p>{t(`home.step${i + 1}Desc`)}</p>
                {i < WORKFLOW_STEPS.length - 1 && (
                  <div className="home-workflow-arrow">
                    <i className="fa-solid fa-chevron-right" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="home-tools-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('home.targetBadge')}</span>
            <h2 className="section-title">{t('home.targetTitle')}</h2>
          </div>
          <div className="home-tools-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {TARGETS.map((item, i) => (
              <div key={i} className="home-tool-card" style={{ cursor: 'default' }}>
                <div className="home-tool-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="home-tool-icon">
                  <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                </div>
                <h3>{t(`home.target${i + 1}`)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats-section">
        <div className="container">
          <div className="home-stats-grid">
            <div className="home-stat">
              <div className="home-stat-number">4</div>
              <div className="home-stat-label">{t('home.statCurriculum')}</div>
              <div className="home-stat-desc">{ko ? '8시간 기본부터 프로젝트형까지' : 'From 8-hour basic to project-based'}</div>
            </div>
            <div className="home-stat">
              <div className="home-stat-number">14+</div>
              <div className="home-stat-label">{t('home.statTemplates')}</div>
              <div className="home-stat-desc">{ko ? '워크시트, 캔버스, 프롬프트' : 'Worksheets, canvas, prompts'}</div>
            </div>
            <div className="home-stat">
              <div className="home-stat-number">14+</div>
              <div className="home-stat-label">{t('home.statCases')}</div>
              <div className="home-stat-desc">{ko ? '발전사, 공공기관, 대학, 기업' : 'Power, public, university, enterprise'}</div>
            </div>
            <div className="home-stat">
              <div className="home-stat-number">28+</div>
              <div className="home-stat-label">{t('home.statHours')}</div>
              <div className="home-stat-desc">{ko ? '다양한 커리큘럼 총 교육시간' : 'Total hours across all curricula'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-content">
            <h2>{t('home.ctaTitle')}</h2>
            <p>{t('home.ctaDesc')}</p>
            <div className="home-cta-buttons">
              <Link to="/course" className="btn btn-primary">
                {t('home.ctaBtn1')}
              </Link>
              <Link to="/materials" className="btn btn-secondary">
                {t('home.ctaBtn2')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
