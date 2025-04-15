import React from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  loading = 'lazy',
  sizes = '100vw'
}) => {
  // Générer les srcSet pour différentes tailles d'images
  const generateSrcSet = (imagePath) => {
    const sizes = [320, 640, 768, 1024, 1280, 1536];
    return sizes
      .map(size => {
        // Pour les images dans /public, on peut utiliser process.env.PUBLIC_URL
        const url = `${process.env.PUBLIC_URL}${imagePath}?w=${size}`;
        return `${url} ${size}w`;
      })
      .join(', ');
  };

  return (
    <img
      src={`${process.env.PUBLIC_URL}${src}`}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      sizes={sizes}
      srcSet={generateSrcSet(src)}
      style={{ 
        objectFit: 'cover',
        backgroundColor: '#f3f4f6' // Couleur de fond pendant le chargement
      }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `${process.env.PUBLIC_URL}/fallback-image.jpg`; // Image de secours
      }}
    />
  );
};

export default OptimizedImage; 