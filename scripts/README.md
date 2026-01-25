# Asset Download Scripts

## Overview
These scripts help you download all images and videos from the backend and store them locally in `public/assets/` folder.

## Scripts

### 1. `download-backend-assets.js`
**Purpose**: Downloads all images and videos referenced in local data files from the backend.

**Usage**:
```bash
cd /Users/divyanshsrivastava/Documents/Luxor/Luxor
node scripts/download-backend-assets.js
```

**What it does**:
- Scans `Actions/localData.js` for all image/video URLs
- Downloads them to `public/assets/` maintaining folder structure
- Skips files that already exist
- Shows progress and summary

**Environment Variables**:
- `API_BASE_URL` or `NEXT_PUBLIC_BASE_URL` - Backend URL (default: `https://api.luxorpen.com/v1`)

### 2. `download-images.js`
**Purpose**: Downloads images from a list of URLs in `data/image-urls.json`

**Usage**:
```bash
node scripts/download-images.js
```

**What it does**:
- Reads URLs from `data/image-urls.json`
- Downloads to `public/assets/offline-images/`
- Creates mapping file `data/image-mapping.json`

## Automatic URL Conversion

The app now automatically converts backend URLs to local paths using utility functions in `utils/imageUtils.js`:

- `convertToLocalPath(url)` - Converts any backend URL to local asset path
- `getLocalAssetPath(root_folder_name, file_name)` - Gets local path from folder and filename

**Example**:
```javascript
// Backend URL: https://api.luxorpen.com/v1/products/image.jpg
// Automatically converts to: /assets/products/image.jpg
```

## How It Works

1. **Detection**: Code detects backend URLs automatically
2. **Conversion**: Backend URLs are converted to local paths
3. **Fallback**: If local file doesn't exist, it tries to download it (future enhancement)

## Manual Download

If you need to download specific assets:

1. Run the download script:
   ```bash
   node scripts/download-backend-assets.js
   ```

2. The script will:
   - Extract all URLs from local data
   - Download to `public/assets/` folder
   - Maintain folder structure from backend

3. After download, all images/videos will be served from local assets

## Video Support

Videos are handled the same way as images:
- Detected by extension (.mp4, .mov, .avi, etc.)
- Downloaded to `public/assets/videos/` or appropriate folder
- Automatically converted from backend URLs

## Notes

- Files are only downloaded if they don't already exist
- The script preserves the original folder structure
- All assets are served from `/assets/` path
- No backend dependency after download
