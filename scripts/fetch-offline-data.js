/**
 * Script to fetch all backend data and save to local JSON files
 * Run this once to download all data from backend for offline use
 * 
 * Usage: node scripts/fetch-offline-data.js
 */

const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const https = require('https');

// Disable SSL verification (only for development)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Configuration
const API_BASE_URL = process.env.API_BASE_URL || 'https://api.luxorpen.com/v1';
const OUTPUT_DIR = path.join(__dirname, '../data');
const IMAGES_DIR = path.join(__dirname, '../public/assets/offline-images');

// Create directories if they don't exist
async function ensureDirectories() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(IMAGES_DIR, { recursive: true });
  console.log('✓ Directories created');
}

// Fetch data from API
async function fetchData(endpoint, params = {}) {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    console.log(`Fetching: ${url}`);
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error.message);
    return null;
  }
}

// Save data to JSON file
async function saveData(filename, data) {
  const filepath = path.join(OUTPUT_DIR, filename);
  await fs.writeFile(filepath, JSON.stringify(data, null, 2));
  console.log(`✓ Saved: ${filename}`);
}

// Extract all image URLs from data
function extractImageUrls(data, baseUrl = '') {
  const urls = new Set();
  
  function constructImageUrl(rootFolder, fileName) {
    if (!rootFolder || !fileName) return null;
    
    // Clean up root_folder_name (remove 'undefined' if present, ensure proper format)
    let folder = rootFolder.toString().replace(/^undefined\/?/, '').replace(/\/$/, '');
    
    // Construct proper URL - backend serves from /v1 which maps to assets folder
    // Format: /v1/{root_folder_name}{file_name}
    const imagePath = folder ? `${folder}/${fileName}` : fileName;
    const cleanPath = imagePath.replace(/\/\//g, '/').replace(/^\//, '');
    
    // Backend serves assets at /v1, so URL is: baseUrl/cleanPath
    return `${baseUrl}/${cleanPath}`;
  }
  
  function traverse(obj) {
    if (!obj || typeof obj !== 'object') return;
    
    // Check for root_folder_name + file_name combination (most common pattern)
    if (obj.root_folder_name && obj.file_name) {
      const url = constructImageUrl(obj.root_folder_name, obj.file_name);
      if (url) urls.add(url);
    }
    
    // Check for master_folder_name + file_name (categories)
    if (obj.master_folder_name && obj.file_name) {
      const url = constructImageUrl(obj.master_folder_name, obj.file_name);
      if (url) urls.add(url);
    }
    
    // Check for product_root_folder_name + product_file_names (arrays)
    if (obj.product_root_folder_name && obj.product_file_names && Array.isArray(obj.product_file_names)) {
      obj.product_file_names.forEach(fileName => {
        if (fileName && typeof fileName === 'string') {
          const url = constructImageUrl(obj.product_root_folder_name, fileName);
          if (url) urls.add(url);
        }
      });
    }
    
    // Check for color_variant images
    if (obj.color_variant && Array.isArray(obj.color_variant)) {
      obj.color_variant.forEach(variant => {
        if (variant && typeof variant === 'object') {
          if (variant.root_folder_name && variant.file_name) {
            const url = constructImageUrl(variant.root_folder_name, variant.file_name);
            if (url) urls.add(url);
          }
        }
      });
    }
    
    // Check for stamps (array of filenames) - stamps are in stamps folder
    if (obj.stamps && Array.isArray(obj.stamps)) {
      obj.stamps.forEach(stamp => {
        if (typeof stamp === 'string' && stamp.match(/\.(jpg|jpeg|png|gif|webp|svg|PNG|JPG|JPEG)$/i)) {
          // Stamps are in src/stamps/ folder on backend
          const url = `${baseUrl}/stamps/${stamp}`;
          urls.add(url);
        }
      });
    }
    
    // Traverse nested objects and arrays (but skip text fields)
    for (const key in obj) {
      const value = obj[key];
      
      // Skip fields that are definitely not image URLs (text descriptions)
      if (['icon', 'description', 'did_you_know', 'name', 'color', '_id', 'created_on', '__v'].includes(key)) {
        continue;
      }
      
      // Skip if we already processed this as root_folder_name + file_name
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
  
  // Filter out invalid URLs
  return Array.from(urls).filter(url => {
    if (!url || typeof url !== 'string') return false;
    
    // Must have image extension
    if (!url.match(/\.(jpg|jpeg|png|gif|webp|svg|PNG|JPG|JPEG)$/i)) return false;
    
    // Must not contain newlines or special characters that indicate it's text
    if (url.includes('\n') || url.includes('\r') || url.length > 500) return false;
    
    // Must not be just a description (check for common description patterns)
    if (url.match(/(Tip|Ink|Grip|Cap|Marker|Pen|Smooth|Writing|Non-Toxic|Eco-Friendly)/i) && 
        !url.match(/\d+\.(jpg|jpeg|png|gif|webp|svg)/i)) {
      // Likely a description, not an image URL
      return false;
    }
    
    return true;
  });
}

// Main function to fetch all data
async function fetchAllData() {
  console.log('🚀 Starting offline data fetch...\n');
  await ensureDirectories();

  const allData = {};
  const allImageUrls = new Set();

  try {
    // 1. Fetch all categories
    console.log('\n📁 Fetching categories...');
    const categories = await fetchData('/get-all-categories');
    if (categories && categories.status) {
      allData.categories = categories.result;
      await saveData('categories.json', categories.result);
      
      // Extract image URLs from categories
      const catImages = extractImageUrls(categories.result, API_BASE_URL);
      catImages.forEach(url => allImageUrls.add(url));
    }

    // 2. Fetch all global products
    console.log('\n📦 Fetching global products...');
    const globalProducts = await fetchData('/get-all-global-products');
    if (globalProducts && globalProducts.status) {
      allData.globalProducts = globalProducts.result;
      await saveData('global-products.json', globalProducts.result);
      
      const prodImages = extractImageUrls(globalProducts.result, API_BASE_URL);
      prodImages.forEach(url => allImageUrls.add(url));
    }

    // 3. Fetch all pens
    console.log('\n✒️ Fetching pens...');
    const pens = await fetchData('/get-all-pens');
    if (pens && pens.status) {
      allData.pens = pens.result;
      await saveData('pens.json', pens.result);
      
      const penImages = extractImageUrls(pens.result, API_BASE_URL);
      penImages.forEach(url => allImageUrls.add(url));
    }

    // 4. Fetch pen categories
    console.log('\n📝 Fetching pen categories...');
    const penCategories = await fetchData('/get-pen-category');
    if (penCategories && penCategories.status) {
      allData.penCategories = penCategories.result;
      await saveData('pen-categories.json', penCategories.result);
    }

    // 5. Fetch marker categories
    console.log('\n🖍️ Fetching marker categories...');
    const markerCategories = await fetchData('/get-all-marker-category');
    if (markerCategories && markerCategories.status) {
      allData.markerCategories = markerCategories.result;
      await saveData('marker-categories.json', markerCategories.result);
    }

    // 6. Fetch master main cat wise products
    console.log('\n📋 Fetching master category products...');
    const masterProducts = await fetchData('/get-master-main-cat-wise-products');
    if (masterProducts && masterProducts.status) {
      allData.masterProducts = masterProducts.result;
      await saveData('master-products.json', masterProducts.result);
      
      const masterImages = extractImageUrls(masterProducts.result, API_BASE_URL);
      masterImages.forEach(url => allImageUrls.add(url));
    }

    // 7. Fetch products by category (for each category)
    if (allData.categories && Array.isArray(allData.categories)) {
      console.log('\n🔍 Fetching category-wise products...');
      const categoryProducts = {};
      
      for (const category of allData.categories) {
        if (category._id) {
          const catProducts = await fetchData('/get-cate-wise-products', {
            _id: category._id,
            page_no: 1
          });
          
          if (catProducts && catProducts.status) {
            categoryProducts[category._id] = catProducts.result;
            
            const catProdImages = extractImageUrls(catProducts.result, API_BASE_URL);
            catProdImages.forEach(url => allImageUrls.add(url));
          }
        }
      }
      
      allData.categoryProducts = categoryProducts;
      await saveData('category-products.json', categoryProducts);
    }

    // 8. Save all data combined
    await saveData('all-data.json', allData);

    // 9. Save image URLs list
    const imageUrlsArray = Array.from(allImageUrls);
    await saveData('image-urls.json', imageUrlsArray);
    console.log(`\n📸 Found ${imageUrlsArray.length} unique image URLs`);

    console.log('\n✅ All data fetched successfully!');
    console.log(`\n📊 Summary:`);
    console.log(`   - Categories: ${allData.categories?.length || 0}`);
    console.log(`   - Global Products: ${allData.globalProducts?.cat_wise_products?.length || 0}`);
    console.log(`   - Pens: ${allData.pens?.length || 0}`);
    console.log(`   - Images to download: ${imageUrlsArray.length}`);
    console.log(`\n💡 Next step: Run 'node scripts/download-images.js' to download all images`);

  } catch (error) {
    console.error('❌ Error during data fetch:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  fetchAllData();
}

module.exports = { fetchAllData, extractImageUrls };
