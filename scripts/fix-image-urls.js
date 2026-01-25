/**
 * Script to fix image URLs in the extracted data
 * Re-extracts image URLs correctly from the fetched data
 */

const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');
const API_BASE_URL = process.env.API_BASE_URL || 'https://api.luxorpen.com/v1';

// Construct proper image URL from root_folder_name and file_name
function constructImageUrl(rootFolder, fileName, baseUrl = API_BASE_URL) {
  if (!rootFolder || !fileName) return null;
  
  // Clean up root_folder_name (remove 'undefined' if present)
  let folder = rootFolder.toString()
    .replace(/^undefined\/?/, '')
    .replace(/\/$/, '')
    .trim();
  
  // Construct path - backend serves from /v1 which maps to assets folder
  const imagePath = folder ? `${folder}/${fileName}` : fileName;
  const cleanPath = imagePath.replace(/\/\//g, '/').replace(/^\//, '');
  
  // Backend serves assets at /v1, so URL is: baseUrl/cleanPath
  return `${baseUrl}/${cleanPath}`;
}

// Extract image URLs correctly from data
function extractImageUrls(data, baseUrl = API_BASE_URL) {
  const urls = new Set();
  
  function traverse(obj) {
    if (!obj || typeof obj !== 'object') return;
    
    // Pattern 1: root_folder_name + file_name (products)
    if (obj.root_folder_name && obj.file_name) {
      const url = constructImageUrl(obj.root_folder_name, obj.file_name, baseUrl);
      if (url) urls.add(url);
    }
    
    // Pattern 2: master_folder_name + file_name (categories)
    if (obj.master_folder_name && obj.file_name) {
      const url = constructImageUrl(obj.master_folder_name, obj.file_name, baseUrl);
      if (url) urls.add(url);
    }
    
    // Pattern 3: product_root_folder_name + product_file_names (arrays)
    if (obj.product_root_folder_name && obj.product_file_names && Array.isArray(obj.product_file_names)) {
      obj.product_file_names.forEach(fileName => {
        if (fileName && typeof fileName === 'string') {
          const url = constructImageUrl(obj.product_root_folder_name, fileName, baseUrl);
          if (url) urls.add(url);
        }
      });
    }
    
    // Pattern 4: color_variant images
    if (obj.color_variant && Array.isArray(obj.color_variant)) {
      obj.color_variant.forEach(variant => {
        if (variant && typeof variant === 'object') {
          if (variant.root_folder_name && variant.file_name) {
            const url = constructImageUrl(variant.root_folder_name, variant.file_name, baseUrl);
            if (url) urls.add(url);
          }
        }
      });
    }
    
    // Pattern 5: stamps (in stamps folder)
    if (obj.stamps && Array.isArray(obj.stamps)) {
      obj.stamps.forEach(stamp => {
        if (typeof stamp === 'string' && stamp.match(/\.(jpg|jpeg|png|gif|webp|svg|PNG|JPG|JPEG)$/i)) {
          const url = `${baseUrl}/stamps/${stamp}`;
          urls.add(url);
        }
      });
    }
    
    // Traverse nested objects and arrays
    for (const key in obj) {
      const value = obj[key];
      
      // Skip text fields
      if (['icon', 'description', 'did_you_know', 'name', 'color', '_id', 'created_on', '__v'].includes(key)) {
        continue;
      }
      
      // Skip if already processed
      if (['root_folder_name', 'file_name', 'master_folder_name', 'product_root_folder_name', 'product_file_names'].includes(key)) {
        continue;
      }
      
      if (Array.isArray(value)) {
        value.forEach(item => traverse(item));
      } else if (typeof value === 'object' && value !== null) {
        traverse(value);
      }
    }
  }
  
  traverse(data);
  
  // Filter valid URLs
  return Array.from(urls).filter(url => {
    if (!url || typeof url !== 'string') return false;
    if (!url.match(/\.(jpg|jpeg|png|gif|webp|svg|PNG|JPG|JPEG)$/i)) return false;
    if (url.includes('\n') || url.includes('\r') || url.length > 500) return false;
    return true;
  });
}

async function fixImageUrls() {
  console.log('🔧 Fixing image URLs...\n');
  
  try {
    // Read all data
    const allData = await fs.readFile(path.join(DATA_DIR, 'all-data.json'), 'utf8');
    const data = JSON.parse(allData);
    
    // Extract correct image URLs
    console.log('📸 Extracting image URLs from data...');
    const imageUrls = extractImageUrls(data, API_BASE_URL);
    
    console.log(`✓ Found ${imageUrls.length} valid image URLs`);
    
    // Save corrected image URLs
    await fs.writeFile(
      path.join(DATA_DIR, 'image-urls.json'),
      JSON.stringify(imageUrls, null, 2)
    );
    
    console.log(`✓ Saved corrected image URLs to: data/image-urls.json`);
    console.log('\n💡 Now run: npm run download-images');
    
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  fixImageUrls();
}

module.exports = { fixImageUrls, extractImageUrls, constructImageUrl };
