import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';
import { useLanguage } from '../contexts/LanguageContext';

export default function SEOHead({ title, description, path = '/', image }) {
  const { language } = useLanguage();
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} - ${SITE_CONFIG.nameKo}`;
  const desc = description || SITE_CONFIG.description;
  const pageUrl = `${SITE_CONFIG.url}${path}`;
  const ogImage = image || `${SITE_CONFIG.url}/og-image.png`;
  const ogLocale = language === 'ko' ? 'ko_KR' : 'en_US';

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(property.startsWith('og:') || property.startsWith('twitter:') ? 'property' : 'name', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setLink('canonical', pageUrl);

    setMeta('description', desc);
    setMeta('og:type', 'website');
    setMeta('og:url', pageUrl);
    setMeta('og:site_name', SITE_CONFIG.name);
    setMeta('og:title', fullTitle);
    setMeta('og:description', desc);
    setMeta('og:image', ogImage);
    setMeta('og:locale', ogLocale);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', desc);
    setMeta('twitter:image', ogImage);
  }, [fullTitle, desc, pageUrl, ogImage, ogLocale]);

  return null;
}
