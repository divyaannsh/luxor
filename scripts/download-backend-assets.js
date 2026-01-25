/**
 * Script to download all images and videos from backend
 * and save them to public/assets folder
 * 
 * Usage: node scripts/download-backend-assets.js
 */

const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const PUBLIC_ASSETS_DIR = path.join(__dirname, '../public/assets');
const API_BASE_URL = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || 'https://api.luxorpen.com/v1';
const DOWNLOADED_FILES = new Set();

// Ensure directory exists
async function ensureDirectory(dir) {
  try {
    await fsp.mkdir(dir, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory ${dir}:`, error.message);
  }
}

// Download file from URL
async function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const protocol = urlObj.protocol === 'https:' ? https : http;
    
    const file = fs.createWriteStream(outputPath);
    
    // SSL options - bypass certificate validation for development
    const options = {
      rejectUnauthorized: false
    };
    
    protocol.get(url, options, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        return downloadFile(response.headers.location, outputPath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fsp.unlink(outputPath).catch(() => {});
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
      
      file.on('error', (err) => {
        file.close();
        fsp.unlink(outputPath).catch(() => {});
        reject(err);
      });
    }).on('error', (err) => {
      file.close();
      fsp.unlink(outputPath).catch(() => {});
      reject(err);
    });
  });
}

// Extract all image/video URLs from local data
function extractAssetUrls() {
  const urls = new Set();
  const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
  const VIDEO_EXTENSIONS = ['.mp4', '.mov', '.avi', '.webm', '.mkv', '.flv', '.wmv', '.m4v'];
  
  function isAssetUrl(url) {
    if (!url || typeof url !== 'string') return false;
    const lowerUrl = url.toLowerCase();
    return IMAGE_EXTENSIONS.some(ext => lowerUrl.includes(ext)) ||
           VIDEO_EXTENSIONS.some(ext => lowerUrl.includes(ext));
  }
  
  try {
    // Import local data
    const { localProducts, localCategories, popularProducts, localPenSubCategories, localMarkerSubCategories } = require('../Actions/localData');
    
    // Extract from products
    localProducts.forEach(product => {
      // Check image field
      if (product.image && isAssetUrl(product.image)) {
        if (product.image.startsWith('http') || product.image.includes(API_BASE_URL)) {
          urls.add(product.image);
        }
      }
      // Check images array
      if (product.images && Array.isArray(product.images)) {
        product.images.forEach(img => {
          if (img && isAssetUrl(img) && (img.startsWith('http') || img.includes(API_BASE_URL))) {
            urls.add(img);
          }
        });
      }
      // Construct from root_folder_name and file_name (only if not already a local path)
      if (product.root_folder_name && product.file_name && isAssetUrl(product.file_name)) {
        // Skip if root_folder_name is already a local path (starts with assets/ or /assets/)
        if (!product.root_folder_name.startsWith('assets/') && 
            !product.root_folder_name.startsWith('/assets/') &&
            !product.root_folder_name.startsWith('public/') &&
            !product.root_folder_name.startsWith('/public/')) {
          const url = `${API_BASE_URL}/${product.root_folder_name}${product.file_name}`;
          urls.add(url);
        }
      }
      // Check color_variant for images
      if (product.color_variant && Array.isArray(product.color_variant)) {
        product.color_variant.forEach(variant => {
          if (variant.root_folder_name && variant.file_name && isAssetUrl(variant.file_name)) {
            // Skip if root_folder_name is already a local path
            if (!variant.root_folder_name.startsWith('assets/') && 
                !variant.root_folder_name.startsWith('/assets/') &&
                !variant.root_folder_name.startsWith('public/') &&
                !variant.root_folder_name.startsWith('/public/')) {
              const url = `${API_BASE_URL}/${variant.root_folder_name}${variant.file_name}`;
              urls.add(url);
            }
          }
        });
      }
    });
    
    // Extract from categories
    localCategories.forEach(cat => {
      if (cat.file_name && cat.master_folder_name && isAssetUrl(cat.file_name)) {
        // Skip if master_folder_name is already a local path
        if (!cat.master_folder_name.startsWith('assets/') && 
            !cat.master_folder_name.startsWith('/assets/') &&
            !cat.master_folder_name.startsWith('public/') &&
            !cat.master_folder_name.startsWith('/public/')) {
          const url = `${API_BASE_URL}/${cat.master_folder_name}/${cat.file_name}`;
          urls.add(url);
        }
      }
    });
    
    // Extract from subcategories
    [...(localPenSubCategories || []), ...(localMarkerSubCategories || [])].forEach(sub => {
      if (sub.file_name && sub.master_folder_name && isAssetUrl(sub.file_name)) {
        // Skip if master_folder_name is already a local path
        if (!sub.master_folder_name.startsWith('assets/') && 
            !sub.master_folder_name.startsWith('/assets/') &&
            !sub.master_folder_name.startsWith('public/') &&
            !sub.master_folder_name.startsWith('/public/')) {
          const url = `${API_BASE_URL}/${sub.master_folder_name}/${sub.file_name}`;
          urls.add(url);
        }
      }
    });
    
    // Extract from popular products
    popularProducts.forEach(pop => {
      if (pop.image && isAssetUrl(pop.image) && (pop.image.startsWith('http') || pop.image.includes(API_BASE_URL))) {
        urls.add(pop.image);
      }
    });
    
    // Extract stamps from products
    localProducts.forEach(product => {
      if (product.stamps && Array.isArray(product.stamps)) {
        product.stamps.forEach(stamp => {
          if (typeof stamp === 'string' && isAssetUrl(stamp)) {
            const url = `${API_BASE_URL}/stamps/${stamp}`;
            urls.add(url);
          }
        });
      }
    });
    
  } catch (error) {
    console.error('Error extracting URLs from local data:', error.message);
  }
  
  return Array.from(urls);
}

// Convert backend URL to local file path
function urlToLocalPath(url, baseDir = PUBLIC_ASSETS_DIR) {
  try {
    const urlObj = new URL(url);
    let pathname = urlObj.pathname;
    
    // Remove /v1 prefix if present
    pathname = pathname.replace(/^\/v1\//, '/');
    
    // Remove leading slash
    pathname = pathname.replace(/^\//, '');
    
    // Create full path
    const fullPath = path.join(baseDir, pathname);
    const dir = path.dirname(fullPath);
    
    return { fullPath, dir };
  } catch (error) {
    console.error(`Error converting URL ${url}:`, error.message);
    return null;
  }
}

// Main download function
async function downloadAssets() {
  console.log('🚀 Starting asset download from backend...\n');
  console.log(`📡 Backend URL: ${API_BASE_URL}`);
  console.log(`📁 Target directory: ${PUBLIC_ASSETS_DIR}\n`);
  
  // Ensure assets directory exists
  await ensureDirectory(PUBLIC_ASSETS_DIR);
  
  // Extract URLs from local data
  const urls = extractAssetUrls();
  console.log(`📋 Found ${urls.length} asset URLs to download\n`);
  
  if (urls.length === 0) {
    console.log('✅ No backend URLs found in local data. All assets are already local!');
    return;
  }
  
  let successCount = 0;
  let failCount = 0;
  let skipCount = 0;
  
  // Download each asset
  for (const url of urls) {
    try {
      const pathInfo = urlToLocalPath(url);
      if (!pathInfo) {
        console.log(`⚠️  Skipping invalid URL: ${url}`);
        skipCount++;
        continue;
      }
      
      const { fullPath, dir } = pathInfo;
      
      // Check if file already exists
      try {
        await fsp.access(fullPath);
        console.log(`⏭️  Already exists: ${path.relative(PUBLIC_ASSETS_DIR, fullPath)}`);
        skipCount++;
        continue;
      } catch {
        // File doesn't exist, proceed with download
      }
      
      // Ensure directory exists
      await ensureDirectory(dir);
      
      // Download file
      console.log(`⬇️  Downloading: ${url}`);
      await downloadFile(url, fullPath);
      console.log(`✅ Saved: ${path.relative(PUBLIC_ASSETS_DIR, fullPath)}\n`);
      successCount++;
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100));
      
    } catch (error) {
      console.error(`❌ Failed to download ${url}:`, error.message);
      failCount++;
    }
  }
  
  console.log('\n📊 Download Summary:');
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ⏭️  Skipped: ${skipCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   📦 Total: ${urls.length}\n`);
  
  if (successCount > 0) {
    console.log('✅ Assets downloaded successfully!');
    console.log('💡 Update your code to use local paths instead of backend URLs.');
  }
}

// Run if called directly
if (require.main === module) {
  downloadAssets().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { downloadAssets, extractAssetUrls, urlToLocalPath };
