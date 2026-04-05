import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import HeroBackground from './HeroBackground';

const SLIDES = [
  { bgType: 'particles' },
  { bgType: 'network' },
  { bgType: 'orbs' },
  { bgType: 'geometric' },
  { bgType: 'particles' },
];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const getSlideContent = (index) => {
    switch (index) {
      case 0:
        return {
          badge: t('hero.badge'),
          title: t('hero.title'),
          highlight: t('hero.titleHighlight'),
          description: t('hero.description'),
          cta1: { text: t('hero.cta1'), to: '/course' },
          cta2: { text: t('hero.cta2'), to: '/course' },
        };
      case 1:
        return {
          badge: t('hero.slide2Badge'),
          title: t('hero.slide2Title'),
          highlight: t('hero.slide2Highlight'),
          description: t('hero.slide2Desc'),
          cta1: { text: t('hero.cta1'), to: '/course' },
          cta2: { text: t('hero.cta2'), to: '/course' },
        };
      case 2:
        return {
          badge: t('hero.slide3Badge'),
          title: t('hero.slide3Title'),
          highlight: t('hero.slide3Highlight'),
          description: t('hero.slide3Desc'),
          cta1: { text: t('hero.cta1'), to: '/course' },
          cta2: { text: t('hero.cta2'), to: '/course' },
        };
      case 3:
        return {
          badge: t('hero.slide4Badge'),
          title: t('hero.slide4Title'),
          highlight: t('hero.slide4Highlight'),
          description: t('hero.slide4Desc'),
          cta1: { text: t('hero.cta1'), to: '/learning' },
          cta2: { text: t('hero.cta2'), to: '/prompts' },
        };
      case 4:
        return {
          badge: t('hero.slide5Badge'),
          title: t('hero.slide5Title'),
          highlight: t('hero.slide5Highlight'),
          description: t('hero.slide5Desc'),
          cta1: { text: t('hero.cta1'), to: '/cases' },
          cta2: { text: t('hero.cta2'), to: '/results' },
        };
      default:
        return {};
    }
  };

  const slide = getSlideContent(current);

  return (
    <section className="hero" aria-label="메인 배너">
      <div className="carousel-viewport" aria-roledescription="carousel" aria-label="히어로 슬라이드">
        <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {SLIDES.map((s, i) => (
            <div key={i} className="carousel-slide">
              <HeroBackground type={s.bgType} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fa-solid fa-robot" /> {slide.badge}
          </div>
          <h1 className="hero-title">
            {slide.title}{' '}
            <span className="highlight">{slide.highlight}</span>
          </h1>
          <p className="hero-description">
            {slide.description}
          </p>
          <div className="hero-buttons">
            <Link to={slide.cta1?.to || '/course'} className="btn btn-primary">{slide.cta1?.text}</Link>
            <Link to={slide.cta2?.to || '/course'} className="btn btn-secondary">{slide.cta2?.text}</Link>
          </div>
        </div>
      </div>

      <button className="carousel-arrow carousel-arrow-left" onClick={prev} aria-label="이전 슬라이드">‹</button>
      <button className="carousel-arrow carousel-arrow-right" onClick={next} aria-label="다음 슬라이드">›</button>

      <div className="carousel-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`슬라이드 ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
          />
        ))}
      </div>

      <div className="scroll-indicator">
        <div className="mouse"><div className="wheel" /></div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
