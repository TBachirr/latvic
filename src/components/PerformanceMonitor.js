import { useEffect } from 'react';
import { getCLS, getFID, getLCP } from 'web-vitals';

/**
 * Service sécurisé pour envoyer les métriques de performance
 * au lieu de les exposer dans la console
 */
const sendToAnalyticsService = (metric) => {
  // Dans un environnement de production, envoyer vers un service d'analytics privé
  if (process.env.NODE_ENV === 'production') {
    try {
      // Encapsuler dans try/catch pour éviter les erreurs critiques
      // Ici on simulerait un envoi vers un endpoint d'analytics
      // fetch('/api/analytics', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(metric),
      //   credentials: 'same-origin'
      // });
      
      // Pour le développement seulement, avec anonymisation des données sensibles
      if (process.env.NODE_ENV === 'development') {
        const safeMetric = { ...metric };
        // Supprimer ou anonymiser les informations sensibles
        if (safeMetric.name && safeMetric.value) {
          console.log(`${safeMetric.name}: ${Math.round(safeMetric.value)}`);
        }
      }
    } catch (err) {
      // Ne pas exposer les erreurs en production
      if (process.env.NODE_ENV === 'development') {
        console.error('Error sending metrics:', err.message);
      }
    }
  }
};

const PerformanceMonitor = () => {
  useEffect(() => {
    // Vérifier si l'API performance est supportée
    if (!window.performance || !performance.getEntriesByType) {
      return;
    }

    // Mesurer Core Web Vitals de manière sécurisée
    getCLS(sendToAnalyticsService);  // Cumulative Layout Shift
    getFID(sendToAnalyticsService);  // First Input Delay
    getLCP(sendToAnalyticsService);  // Largest Contentful Paint

    // Utiliser un timeout pour éviter de bloquer le rendu initial
    const timeoutId = setTimeout(() => {
      try {
        // Observer les performances de navigation avec sécurité
        const navigationEntries = performance.getEntriesByType('navigation');
        if (navigationEntries && navigationEntries.length > 0) {
          const navigation = navigationEntries[0];
          const timing = {
            DNS: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
            TLS: Math.round(navigation.connectEnd - navigation.connectStart),
            TTFB: Math.round(navigation.responseStart - navigation.requestStart),
            contentLoad: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
            pageLoad: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          };
          
          sendToAnalyticsService({
            name: 'navigation-timing',
            value: timing.pageLoad,
            details: timing
          });
        }
        
        // Nettoyer les entrées pour éviter les fuites de mémoire
        performance.clearResourceTimings();
      } catch (err) {
        // Silence les erreurs en production
        if (process.env.NODE_ENV === 'development') {
          console.error('Performance monitoring error:', err.message);
        }
      }
    }, 3000); // Différer l'exécution pour ne pas impacter les performances initiales

    // Nettoyage pour éviter les fuites de mémoire
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
};

export default PerformanceMonitor; 