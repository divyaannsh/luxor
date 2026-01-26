/**
 * Image and Video Utility Functions
 * Automatically converts backend URLs to local assets
 * Downloads missing images/videos from backend if needed
 */

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
const VIDEO_EXTENSIONS = ['.mp4', '.mov', '.avi', '.webm', '.mkv', '.flv', '.wmv'];

/**
 * Check if URL is a backend URL that needs to be converted
 */
export const isBackendUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  
  // Check for backend base URLs
  const backendPatterns = [
    /^https?:\/\/.*luxorpen\.com/,
    /^https?:\/\/.*localhost:8000/,
    /^https?:\/\/.*\/v1\//,
    process.env.NEXT_PUBLIC_BASE_URL && url.startsWith(process.env.NEXT_PUBLIC_BASE_URL),
    process.env.NEXT_PUBLIC_API_BASE_URL && url.startsWith(process.env.NEXT_PUBLIC_API_BASE_URL),
  ].filter(Boolean);
  
  return backendPatterns.some(pattern => {
    if (typeof pattern === 'boolean') return pattern;
    return pattern.test(url);
  });
};

/**
 * Convert backend URL to local asset path
 */
export const convertToLocalPath = (url) => {
  if (!url || typeof url !== 'string') return url;
  
  // If already a local path, return as is
  if (url.startsWith('/assets/') || url.startsWith('/public/')) {
    return url;
  }
  
  // If it's a backend URL, convert it
  if (isBackendUrl(url)) {
    // Extract path from backend URL
    let path = url;
    
    // Remove protocol and domain
    path = path.replace(/^https?:\/\/[^\/]+/, '');
    
    // Remove /v1 prefix if present
    path = path.replace(/^\/v1\//, '/');
    
    // Ensure it starts with /assets/
    if (!path.startsWith('/assets/')) {
      path = `/assets${path}`;
    }
    
    return path;
  }
  
  // If it's a relative path without /assets/, add it
  if (url.startsWith('/') && !url.startsWith('/assets/') && !url.startsWith('/_next/')) {
    // Check if it looks like an asset path
    const isAsset = IMAGE_EXTENSIONS.some(ext => url.toLowerCase().endsWith(ext)) ||
                    VIDEO_EXTENSIONS.some(ext => url.toLowerCase().endsWith(ext));
    
    if (isAsset) {
      return `/assets${url}`;
    }
  }
  
  return url;
};

/**
 * Get local asset path from root_folder_name and file_name
 */
export const getLocalAssetPath = (root_folder_name, file_name) => {
  if (!file_name) return null;
  
  // Clean up root_folder_name
  let folder = root_folder_name || '';
  folder = folder.replace(/^undefined\/?/, '').trim();
  
  // Remove trailing slash but ensure we add it back when constructing path
  folder = folder.replace(/\/$/, '');
  
  // If folder starts with assets/, it's already local
  if (folder.startsWith('assets/')) {
    // Ensure there's a / between folder and filename
    return `/${folder}/${file_name}`;
  }
  
  // Convert to local assets path
  if (folder) {
    // Always add / between folder and filename
    return `/assets/${folder}/${file_name}`;
  }
  
  return `/assets/${file_name}`;
};

/**
 * Check if file is an image
 */
export const isImage = (url) => {
  if (!url) return false;
  return IMAGE_EXTENSIONS.some(ext => url.toLowerCase().endsWith(ext));
};

/**
 * Check if file is a video
 */
export const isVideo = (url) => {
  if (!url) return false;
  return VIDEO_EXTENSIONS.some(ext => url.toLowerCase().endsWith(ext));
};

/**
 * Get file extension from URL
 */
export const getFileExtension = (url) => {
  if (!url) return '';
  const match = url.match(/\.([a-zA-Z0-9]+)(\?|$)/);
  return match ? match[1].toLowerCase() : '';
};
