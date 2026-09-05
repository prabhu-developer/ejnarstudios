const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const DIRECTORIES_TO_SCAN = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../public/images'),
  path.join(__dirname, '../public/images/apps'),
  path.join(__dirname, '../public/images/clients'),
  path.join(__dirname, '../public/images/websites'),
];

async function optimizeImages() {
  console.log('Starting image optimization...');
  let optimizedCount = 0;
  let totalSavedBytes = 0;

  for (const dir of DIRECTORIES_TO_SCAN) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) continue;

      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const baseName = path.basename(file, ext);
        const newFilePath = path.join(dir, `${baseName}.webp`);

        // Skip if already converted
        if (fs.existsSync(newFilePath)) continue;

        console.log(`Optimizing: ${filePath}`);
        
        try {
          const originalSize = stat.size;
          await sharp(filePath)
            .webp({ quality: 80, effort: 6 })
            .toFile(newFilePath);
            
          const newSize = fs.statSync(newFilePath).size;
          const savedBytes = originalSize - newSize;
          totalSavedBytes += savedBytes;
          optimizedCount++;
          
          console.log(`  -> Saved ${(savedBytes / 1024).toFixed(2)} KB`);
        } catch (error) {
          console.error(`Error optimizing ${file}:`, error);
        }
      }
    }
  }

  console.log('--- Optimization Complete ---');
  console.log(`Images Optimized: ${optimizedCount}`);
  console.log(`Total Space Saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages();
