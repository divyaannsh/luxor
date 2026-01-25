# Download Backend Assets Guide

## Overview
This guide explains how to download all images and videos from the backend and use them locally from the `public/assets/` folder.

## Quick Start

### Step 1: Run the Download Script
```bash
cd /Users/divyanshsrivastava/Documents/Luxor/Luxor
node scripts/download-backend-assets.js
```

This will:
- Scan all local data files for image/video URLs
- Download them to `public/assets/` folder
- Maintain the original folder structure
- Skip files that already exist

### Step 2: Verify Downloads
Check the `public/assets/` folder to see all downloaded files.

### Step 3: Use the App
The app automatically converts backend URLs to local paths using utility functions.

## How It Works

### Automatic URL Conversion
The app uses utility functions in `utils/imageUtils.js`:

1. **`convertToLocalPath(url)`** - Converts backend URLs to local paths
   - `https://api.luxorpen.com/v1/products/image.jpg` → `/assets/products/image.jpg`
   - `http://localhost:8000/v1/videos/video.mp4` → `/assets/videos/video.mp4`

2. **`getLocalAssetPath(root_folder_name, file_name)`** - Gets local path from folder and filename
   - `root_folder_name: "products/"`, `file_name: "pen.jpg"` → `/assets/products/pen.jpg`

### Where It's Used

**Product Pages:**
- Product detail images
- Product listing images
- Other product images in slider

**Listing Pages:**
- Product grid images
- Product card images

**All Components:**
- Any component using images/videos automatically converts backend URLs

## File Structure

After downloading, your `public/assets/` folder will have:
```
public/assets/
├── products/
│   ├── image1.jpg
│   ├── image2.png
│   └── ...
├── videos/
│   ├── journey.mp4
│   └── ...
├── master_prd_icons/
│   ├── pens/
│   ├── markers/
│   └── ...
└── ...
```

## Supported Formats

### Images
- `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`, `.bmp`

### Videos
- `.mp4`, `.mov`, `.avi`, `.webm`, `.mkv`, `.flv`, `.wmv`, `.m4v`

### Stamps
- Product stamps (feature badges) are also downloaded from `/stamps/` folder
- Automatically converted to `/assets/stamps/` locally

## Manual Download

If you need to download specific assets manually:

1. **Identify the backend URL** from the code or network tab
2. **Run the download script** - it will download all referenced assets
3. **Or download manually** and place in `public/assets/` maintaining folder structure

## Troubleshooting

### Images Not Loading
1. Check if file exists in `public/assets/`
2. Verify the path is correct (should start with `/assets/`)
3. Check browser console for 404 errors
4. Run the download script again

### Videos Not Playing
1. Ensure video file exists in `public/assets/videos/`
2. Check video format is supported
3. Verify video path in component

### Script Errors
1. Check `API_BASE_URL` environment variable
2. Ensure network connection to backend
3. Check file permissions in `public/assets/`

## Benefits

✅ **No Backend Dependency** - All assets served locally
✅ **Faster Loading** - No network requests for images/videos
✅ **Offline Support** - Works completely offline
✅ **Easy Deployment** - Just deploy static files
✅ **Automatic Conversion** - Code automatically uses local paths

## Next Steps

1. Run the download script
2. Verify all assets are downloaded
3. Test the app - all images/videos should load from local assets
4. Deploy - no backend needed!
