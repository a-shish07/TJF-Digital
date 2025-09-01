import React, { useEffect } from 'react';

// SEO head component with graceful fallback when react-helmet-async isn't installed
let Helmet = null;
try {
  // eslint-disable-next-line global-require
  Helmet = require('react-helmet-async').Helmet;
} catch (e) {
  Helmet = null;
}

function upsertMeta(attrName, attrValue, content) {
  if (typeof document === 'undefined') return;
  let selector = `[${attrName}="${attrValue}"]`;
  let el = document.head.querySelector(`meta${selector}`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

const SeoHead = ({ title, description, canonical, keywords = [] }) => {
  const fullTitle = title ? `${title} | TJF Digital` : 'TJF Digital';
  const canonicalHref = canonical || (typeof window !== 'undefined' ? window.location.href : undefined);

  // Fallback: manipulate DOM if Helmet is unavailable
  useEffect(() => {
    if (Helmet) return; // Helmet will handle it
    if (typeof document !== 'undefined') {
      if (fullTitle) document.title = fullTitle;
      if (description) upsertMeta('name', 'description', description);
      if (keywords.length) upsertMeta('name', 'keywords', keywords.join(', '));
      if (canonicalHref) {
        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
          link = document.createElement('link');
          link.setAttribute('rel', 'canonical');
          document.head.appendChild(link);
        }
        link.setAttribute('href', canonicalHref);
      }
      // Basic OpenGraph
      upsertMeta('property', 'og:title', fullTitle);
      if (description) upsertMeta('property', 'og:description', description);
      upsertMeta('property', 'og:type', 'website');
    }
  }, [fullTitle, description, canonicalHref, keywords.join(',')]);

  if (!Helmet) return null;

  return (
    <Helmet>
      {title && <title>{fullTitle}</title>}
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonicalHref && <link rel="canonical" href={canonicalHref} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SeoHead;