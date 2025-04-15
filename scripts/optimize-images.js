const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Créer le dossier de sortie s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Tailles d'images à générer
const sizes = [320, 640, 768, 1024, 1280, 1536];

// Formats d'images à générer
const formats = ['webp', 'avif'];

async function optimizeImage(file) {
  const image = sharp(path.join(inputDir, file));
  const metadata = await image.metadata();

  // Pour chaque taille
  for (const size of sizes) {
    // Ne pas agrandir les images plus petites que la taille cible
    if (size > metadata.width) continue;

    // Pour chaque format
    for (const format of formats) {
      const outputPath = path.join(
        outputDir,
        `${path.parse(file).name}-${size}.${format}`
      );

      await image
        .resize(size, null, { fit: 'contain' })
        [format]({
          quality: 80,
          effort: 6,
        })
        .toFile(outputPath);

      console.log(`Generated: ${outputPath}`);
    }
  }
}

// Lire tous les fichiers du dossier d'entrée
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Erreur lors de la lecture du dossier:', err);
    return;
  }

  // Filtrer pour ne garder que les images
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|gif)$/i.test(file)
  );

  // Optimiser chaque image
  imageFiles.forEach(file => {
    optimizeImage(file).catch(err => {
      console.error(`Erreur lors de l'optimisation de ${file}:`, err);
    });
  });
}); 