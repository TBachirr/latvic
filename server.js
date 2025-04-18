const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares de sécurité
app.use(helmet()); // Ajoute de nombreux en-têtes de sécurité par défaut

// Configuration plus précise de Content-Security-Policy
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'https://cdn.emailjs.com'],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'", 'https://api.emailjs.com'],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      upgradeInsecureRequests: [],
    },
  })
);

// Protection contre le clickjacking
app.use(helmet.frameguard({ action: 'deny' }));

// Protection contre le MIME sniffing
app.use(helmet.noSniff());

// Activer Strict-Transport-Security
app.use(
  helmet.hsts({
    maxAge: 31536000, // 1 an en secondes
    includeSubDomains: true,
    preload: true,
  })
);

// Activer les restrictions Permissions Policy
app.use((req, res, next) => {
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  next();
});

// Force la mise à jour du cache pour les métadonnées SEO
app.use((req, res, next) => {
  // Définir la date de dernière modification à maintenant pour les pages principales
  if (req.path === '/' || req.path.endsWith('.html') || ['/about', '/services', '/contact'].includes(req.path)) {
    const now = new Date();
    res.setHeader('Last-Modified', now.toUTCString());
    // Forcer les navigateurs et moteurs de recherche à recharger la page
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
  next();
});

// Compression pour améliorer les performances
app.use(compression());

// Limiteur de taux pour prévenir les attaques par force brute
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limite chaque IP à 100 requêtes par fenêtre
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Trop de requêtes, veuillez réessayer plus tard',
});

// Appliquer le limiteur à toutes les requêtes
app.use(apiLimiter);

// Protection CSRF pour les requêtes POST
app.use((req, res, next) => {
  if (req.method === 'POST') {
    const referer = req.headers.referer || '';
    const host = req.headers.host || '';
    
    // Vérifier que le Referer est du même domaine
    if (!referer || !referer.includes(host)) {
      return res.status(403).send('Accès refusé');
    }
  }
  next();
});

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'build'), {
  // Sécurité des en-têtes de cache
  setHeaders: (res, path) => {
    // Pour les fichiers HTML, ne pas mettre en cache
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      const now = new Date();
      res.setHeader('Last-Modified', now.toUTCString());
    }
    // Pour JS, CSS et autres assets, mise en cache longue durée
    else if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  },
}));

// Middleware pour les routes principales - ajoute des en-têtes pour éviter le cache
app.use((req, res, next) => {
  if (req.path === '/' || ['/about', '/services', '/contact'].includes(req.path)) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
  next();
});

// Toutes les requêtes non API sont redirigées vers index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Une erreur est survenue');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
}); 