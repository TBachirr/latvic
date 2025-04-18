/**
 * Script pour notifier Google de la mise à jour du site
 * 
 * Utilisation: 
 * 1. Installer axios : npm install axios
 * 2. Exécuter le script : node scripts/request-crawl.js
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const SITE_URL = 'https://latvic.org';

async function fetchSitemap() {
  try {
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    const sitemapContent = await readFile(sitemapPath, 'utf8');
    
    // Extraire les URLs du sitemap
    const urlRegex = /<loc>([^<]+)<\/loc>/g;
    const urls = [];
    let match;
    
    while ((match = urlRegex.exec(sitemapContent)) !== null) {
      urls.push(match[1]);
    }
    
    return urls;
  } catch (error) {
    console.error('Erreur lors de la lecture du sitemap:', error);
    return [];
  }
}

async function requestGoogleCrawl(urls) {
  console.log('Notification à Google pour recrawler les URLs suivantes:');
  
  for (const url of urls) {
    try {
      console.log(`- Demande de crawl pour: ${url}`);
      const response = await axios.get(`https://www.google.com/ping?sitemap=${encodeURIComponent(url)}`);
      
      if (response.status === 200) {
        console.log(`  ✓ Requête envoyée avec succès`);
      } else {
        console.log(`  ✗ Requête échouée: ${response.status}`);
      }
    } catch (error) {
      console.error(`  ✗ Erreur: ${error.message}`);
    }
  }
  
  // Notification du sitemap
  try {
    const sitemapUrl = `${SITE_URL}/sitemap.xml`;
    console.log(`\nNotification à Google du sitemap: ${sitemapUrl}`);
    const response = await axios.get(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
    
    if (response.status === 200) {
      console.log(`  ✓ Requête envoyée avec succès`);
    } else {
      console.log(`  ✗ Requête échouée: ${response.status}`);
    }
  } catch (error) {
    console.error(`  ✗ Erreur: ${error.message}`);
  }
}

async function main() {
  console.log('=== Demande de recrawl à Google ===');
  
  const urls = await fetchSitemap();
  
  if (urls.length > 0) {
    await requestGoogleCrawl(urls);
    console.log('\nProcessus terminé.');
  } else {
    console.log('Aucune URL trouvée dans le sitemap.');
  }
}

main().catch(console.error); 