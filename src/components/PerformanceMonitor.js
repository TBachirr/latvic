import { useEffect } from 'react';
import { getCLS, getFID, getLCP } from 'web-vitals';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Mesurer Core Web Vitals
    getCLS(console.log);  // Cumulative Layout Shift
    getFID(console.log);  // First Input Delay
    getLCP(console.log);  // Largest Contentful Paint

    // Observer les performances de navigation
    if (window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0];
      const timing = {
        DNS: navigation.domainLookupEnd - navigation.domainLookupStart,
        TLS: navigation.connectEnd - navigation.connectStart,
        TTFB: navigation.responseStart - navigation.requestStart,
        contentLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        pageLoad: navigation.loadEventEnd - navigation.loadEventStart,
      };
      console.log('Navigation Timing:', timing);
    }

    // Observer la mémoire
    if (performance.memory) {
      console.log('Memory Usage:', {
        jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
        totalJSHeapSize: performance.memory.totalJSHeapSize,
        usedJSHeapSize: performance.memory.usedJSHeapSize,
      });
    }
  }, []);

  return null;
};

export default PerformanceMonitor; 