# Politique de Sécurité

## Signalement des Vulnérabilités

Si vous découvrez une vulnérabilité de sécurité dans ce projet, veuillez nous en informer immédiatement en envoyant un email à [contact@latvic.com](mailto:contact@latvic.com) avec le sujet "Vulnérabilité de Sécurité". 

Nous vous demandons de :
- Ne pas divulguer publiquement la vulnérabilité avant qu'elle n'ait été corrigée
- Fournir suffisamment d'informations pour reproduire et comprendre la vulnérabilité
- Respecter la vie privée et l'intégrité des données des utilisateurs

## Mesures de Sécurité Implémentées

Ce projet implémente plusieurs mesures de sécurité :

1. **Protection contre les Injections** :
   - Sanitisation des entrées utilisateur
   - Validation des données côté client et serveur
   - Protection contre les attaques XSS

2. **En-têtes de Sécurité HTTP** :
   - Content-Security-Policy (CSP)
   - X-Content-Type-Options
   - X-Frame-Options
   - Strict-Transport-Security (HSTS)
   - Referrer-Policy
   - Permissions-Policy

3. **Protection CSRF** :
   - Validation du Referer pour les requêtes POST
   - Attributs rel="noopener noreferrer" sur les liens externes

4. **Limitation de Débit** :
   - Protection contre les attaques par force brute ou DoS

5. **Gestion des Secrets** :
   - Variables d'environnement pour les clés API
   - Exclusion des fichiers .env des dépôts Git

## Bonnes Pratiques pour les Développeurs

Lors du développement sur ce projet, veuillez suivre ces pratiques de sécurité :

1. **Gestion des Dépendances** :
   - Maintenez les dépendances à jour
   - Vérifiez régulièrement les vulnérabilités avec `npm audit`

2. **Validation des Entrées** :
   - Validez toujours les entrées utilisateur côté client ET serveur
   - Utilisez les fonctions de sanitization existantes

3. **Secrets et Authentification** :
   - Ne stockez jamais de secrets en dur dans le code
   - Utilisez les variables d'environnement (.env.local)
   - N'exposez pas les secrets dans les journaux ou les messages d'erreur

4. **Protection contre les Injections** :
   - Évitez d'utiliser dangerouslySetInnerHTML dans React
   - N'utilisez pas eval() ou des constructions similaires
   - Échappez correctement les données affichées

5. **Sécurité du Transport** :
   - Utilisez HTTPS exclusivement en production
   - Respectez la politique HSTS

## Tests de Sécurité

Avant de déployer en production, effectuez ces tests :

1. **Tests Automatisés** :
   - Validation des entrées et sanitization
   - Vérification des protections XSS

2. **Tests Manuels** :
   - Vérification des en-têtes de sécurité
   - Test de clickjacking
   - Test des restrictions CSP

3. **Analyse de Dépendances** :
   - Exécutez `npm audit` et corrigez les problèmes identifiés

## Versions Supportées

| Version | Support            |
| ------- | ------------------ |
| 1.x.x   | ✅ Support actif   |
| < 1.0   | ❌ Non supportée   | 