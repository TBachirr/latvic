import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, type = 'website', image = 'https://latvic.org/images/optimized/logo-768.webp' }) => {
  const siteTitle = title ? `${title} | LATVIC` : 'LATVIC | Sécurité Privée en Guinée';
  const siteDescription = description || 'LATVIC s\'appuie sur plus de 35 ans d\'expérience cumulée de ses dirigeants dans le domaine de la sécurité en Guinée. Votre sécurité, notre priorité.';
  const siteUrl = 'https://latvic.org';
  const canonicalUrl = window.location.href;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="https://latvic.org/images/optimized/logo-320.webp" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Latvic" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@latvic" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />
      <meta property="twitter:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default SEO; 