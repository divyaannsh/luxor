/**
 * Script to download all images from backend to local assets folder
 * 
 * Usage: node scripts/download-images.js
 */

const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const https = require('https');
const { createWriteStream } = require('fs');

// Disable SSL verification (only for development)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const IMAGE_URLS_FILE = path.join(__dirname, '../data/image-urls.json');
const OUTPUT_DIR = path.join(__dirname, '../public/assets/offline-images');
const API_BASE_URL = process.env.API_BASE_URL || 'https://api.luxorpen.com/v1';

// Create directory if it doesn't exist
async function ensureDirectory(dir) {
  await fs.mkdir(dir, { recursive: true });
}

// Download a single image
async function downloadImage(url, outputPath) {
  try {
    // Check if file already exists
    try {
      await fs.access(outputPath);
      console.log(`⏭️  Skipped (exists): ${path.basename(outputPath)}`);
      return true;
    } catch {
      // File doesn't exist, proceed with download
    }

    const response = await axios({
      url: url,
      method: 'GET',
      responseType: 'stream',
      timeout: 30000,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    });

    const writer = createWriteStream(outputPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log(`✓ Downloaded: ${path.basename(outputPath)}`);
        resolve(true);
      });
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`✗ Failed: ${url} - ${error.message}`);
    return false;
  }
}

// Get file extension from URL
function getExtension(url) {
  const match = url.match(/\.(jpg|jpeg|png|gif|webp|svg|pdf)$/i);
  return match ? match[1].toLowerCase() : 'jpg';
}

// Generate local filename from URL
function generateFilename(url, index) {
  try {
    // Try to extract meaningful filename from URL
    const urlPath = new URL(url).pathname;
    const parts = urlPath.split('/').filter(p => p);
    const filename = parts[parts.length - 1] || `image-${index}`;
    
    // Ensure it has an extension
    if (!filename.match(/\.(jpg|jpeg|png|gif|webp|svg|pdf)$/i)) {
      return `${filename}.${getExtension(url)}`;
    }
    
    // Sanitize filename
    return filename.replace(/[^a-zA-Z0-9._-]/g, '_');
  } catch {
    return `image-${index}.${getExtension(url)}`;
  }
}

// Download all images
async function downloadAllImages() {
  console.log('🖼️  Starting image download...\n');

  try {
    // Read image URLs from file
    const imageUrlsData = await fs.readFile(IMAGE_URLS_FILE, 'utf8');
    const imageUrls = JSON.parse(imageUrlsData);

    if (!Array.isArray(imageUrls) || imageUrls.length === 0) {
      console.log('⚠️  No image URLs found. Run fetch-offline-data.js first.');
      return;
    }

    await ensureDirectory(OUTPUT_DIR);

    console.log(`📥 Downloading ${imageUrls.length} images...\n`);

    let successCount = 0;
    let failCount = 0;

    // Download images with concurrency limit
    const concurrency = 5;
    for (let i = 0; i < imageUrls.length; i += concurrency) {
      const batch = imageUrls.slice(i, i + concurrency);
      
      await Promise.all(
        batch.map(async (url, batchIndex) => {
          const index = i + batchIndex;
          const filename = generateFilename(url, index);
          const outputPath = path.join(OUTPUT_DIR, filename);
          
          const success = await downloadImage(url, outputPath);
          if (success) {
            successCount++;
          } else {
            failCount++;
          }
        })
      );

      // Progress update
      const progress = ((i + batch.length) / imageUrls.length * 100).toFixed(1);
      console.log(`\n📊 Progress: ${progress}% (${i + batch.length}/${imageUrls.length})\n`);
    }

    // Create mapping file (URL -> local path)
    const imageMapping = {};
    for (let i = 0; i < imageUrls.length; i++) {
      const url = imageUrls[i];
      const filename = generateFilename(url, i);
      imageMapping[url] = `/assets/offline-images/${filename}`;
    }

    const mappingPath = path.join(__dirname, '../data/image-mapping.json');
    await fs.writeFile(mappingPath, JSON.stringify(imageMapping, null, 2));
    console.log(`\n✓ Image mapping saved to: data/image-mapping.json`);

    console.log('\n✅ Image download complete!');
    console.log(`\n📊 Summary:`);
    console.log(`   - Successfully downloaded: ${successCount}`);
    console.log(`   - Failed: ${failCount}`);
    console.log(`   - Total: ${imageUrls.length}`);

  } catch (error) {
    console.error('❌ Error during image download:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  downloadAllImages();
}

module.exports = { downloadAllImages };
