import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, type = 'website', image = '/images/optimized/logo-768.webp' }) => {
  const siteTitle = title ? `${title} | LATVIC` : 'LATVIC | Sécurité Privée en Guinée';
  const siteDescription = description || 'LATVIC, créée en 2024, s\'appuie sur plus de 35 ans d\'expérience cumulée de ses dirigeants dans le domaine de la sécurité en Guinée. Votre sécurité, notre priorité.';
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      
      {/* Favicon */}
      <link rel="icon" href="/images/optimized/logo-320.webp" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO; 