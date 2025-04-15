import { useEffect } from 'react';

/**
 * Composant pour surveiller et protéger contre les menaces de sécurité côté client
 */
const SecurityMonitor = () => {
  useEffect(() => {
    // Protection contre le clickjacking
    if (window.self !== window.top) {
      // Le site est dans une iframe, potentielle tentative de clickjacking
      window.top.location.href = window.self.location.href;
    }

    // Détection des outils de développement (anti-tampering basique)
    const devToolsDetection = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      
      if (widthThreshold || heightThreshold) {
        // Mesure de sécurité légère - simplement log en développement
        if (process.env.NODE_ENV === 'development') {
          console.log('Détection des outils de développement');
        }
      }
    };

    // Protection contre les scripts malveillants et injections XSS
    const sanitizeDOM = () => {
      try {
        // Vérifier les attributs malveillants dans tous les éléments
        const allElements = document.querySelectorAll('*');
        const dangerousAttributes = ['onerror', 'onload', 'onmouseover', 'onclick', 'onunload'];
        
        allElements.forEach(el => {
          // Vérifier les attributs potentiellement dangereux et les supprimer
          dangerousAttributes.forEach(attr => {
            if (el.hasAttribute(attr) && !el.getAttribute(attr).startsWith('React')) {
              el.removeAttribute(attr);
              
              if (process.env.NODE_ENV === 'development') {
                console.warn(`Attribut potentiellement dangereux supprimé: ${attr}`);
              }
            }
          });
          
          // Vérifier les attributs style potentiellement dangereux
          if (el.hasAttribute('style')) {
            const style = el.getAttribute('style');
            // eslint-disable-next-line no-script-url
            if (style.includes('javascript:') || style.includes('expression(') 
                || style.includes('url(javascript:')) {
              el.removeAttribute('style');
              
              if (process.env.NODE_ENV === 'development') {
                console.warn('Style potentiellement malveillant supprimé');
              }
            }
          }
        });
      } catch (error) {
        // Silence les erreurs en production
        if (process.env.NODE_ENV === 'development') {
          console.error('Erreur dans le sanitizeur DOM:', error);
        }
      }
    };

    // Validation des URL pour prévenir le redirections ouvertes
    const secureAnchors = () => {
      try {
        const anchors = document.querySelectorAll('a[href]');
        anchors.forEach(anchor => {
          const href = anchor.getAttribute('href');
          
          // Vérifier les URL suspectes qui pourraient être des redirections ouvertes
          // eslint-disable-next-line no-script-url
          if (href && (href.startsWith('javascript:') || 
              href.includes('data:') || 
              (href.includes('://') && !href.startsWith('https://')))) {
            
            // Neutraliser le lien potentiellement malveillant
            anchor.setAttribute('href', '#');
            anchor.setAttribute('target', '_self');
            anchor.setAttribute('rel', 'noopener noreferrer');
            
            if (process.env.NODE_ENV === 'development') {
              console.warn(`URL potentiellement dangereuse neutralisée: ${href}`);
            }
          }
          
          // Ajouter des attributs de sécurité pour les liens externes
          if (href && href.includes('://') && !href.includes(window.location.hostname)) {
            anchor.setAttribute('rel', 'noopener noreferrer');
            anchor.setAttribute('target', '_blank');
          }
        });
      } catch (error) {
        // Silence les erreurs en production
        if (process.env.NODE_ENV === 'development') {
          console.error('Erreur dans la sécurisation des ancres:', error);
        }
      }
    };

    // Exécuter les vérifications initiales
    sanitizeDOM();
    secureAnchors();
    
    // Observer les modifications du DOM pour continuer à protéger contre les injections
    const observer = new MutationObserver(() => {
      sanitizeDOM();
      secureAnchors();
    });
    
    // Démarrer l'observation
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true, 
      attributeFilter: ['href', 'style', 'src', 'onclick', 'onerror'] 
    });
    
    // Ajouter des détections d'événements
    window.addEventListener('resize', devToolsDetection);

    // Nettoyage lors du démontage du composant
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', devToolsDetection);
    };
  }, []);

  return null;
};

export default SecurityMonitor; 