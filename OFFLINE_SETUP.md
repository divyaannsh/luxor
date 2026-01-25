# Offline Setup Guide for Luxor Website

This guide explains how to set up the Luxor website to work completely offline with all data and images stored locally.

## Overview

The offline setup process involves:
1. **Fetching all data** from the backend API
2. **Downloading all images** to the local assets folder
3. **Building offline data structure** that the frontend can use
4. **Configuring the frontend** to use only local data

## Prerequisites

- Node.js installed
- Backend API accessible (for initial data fetch)
- npm or yarn package manager

## Setup Steps

### Step 1: Install Dependencies

Make sure all dependencies are installed:

```bash
cd Luxor
npm install
```

### Step 2: Configure API Base URL (Optional)

If your backend API is not at the default URL, set the environment variable:

```bash
export API_BASE_URL=https://your-api-url.com/v1
```

Or create a `.env` file:

```
API_BASE_URL=https://your-api-url.com/v1
```

### Step 3: Fetch All Backend Data

This script fetches all data from the backend API and saves it to JSON files:

```bash
npm run fetch-offline-data
```

This will:
- Fetch all categories
- Fetch all products (pens, markers, etc.)
- Fetch all category-wise products
- Save everything to `data/` directory
- Generate a list of all image URLs

**Output files:**
- `data/categories.json`
- `data/global-products.json`
- `data/pens.json`
- `data/pen-categories.json`
- `data/marker-categories.json`
- `data/master-products.json`
- `data/category-products.json`
- `data/all-data.json`
- `data/image-urls.json`

### Step 4: Download All Images

This script downloads all images referenced in the data to the local assets folder:

```bash
npm run download-images
```

This will:
- Read image URLs from `data/image-urls.json`
- Download each image to `public/assets/offline-images/`
- Create a mapping file (`data/image-mapping.json`) that maps original URLs to local paths
- Skip images that already exist

**Output:**
- All images in `public/assets/offline-images/`
- Mapping file: `data/image-mapping.json`

### Step 5: Build Offline Data Structure

This script combines all data and replaces image URLs with local paths:

```bash
npm run build-offline-data
```

This will:
- Read all data files
- Replace image URLs with local paths using the mapping
- Generate `Actions/offlineData.js` with complete offline data structure

### Step 6: Run Complete Setup (All Steps)

Or run all steps at once:

```bash
npm run setup-offline
```

## Configuration

### Force Offline Mode

The frontend is configured to always use offline data. To change this, edit `Actions/action.js`:

```javascript
// Set to false to enable API calls when online
const FORCE_OFFLINE_MODE = true;
```

### Service Worker

The service worker (`public/sw.js`) is configured to:
- Cache all static assets
- Cache API responses (if any)
- Serve cached content when offline
- Show offline page for navigation requests when offline

## File Structure

After setup, your project structure will look like:

```
Luxor/
├── data/                          # Fetched data from backend
│   ├── categories.json
│   ├── global-products.json
│   ├── pens.json
│   ├── image-urls.json
│   ├── image-mapping.json
│   └── all-data.json
├── public/
│   └── assets/
│       └── offline-images/       # Downloaded images
│           ├── image-1.jpg
│           ├── image-2.png
│           └── ...
├── Actions/
│   ├── action.js                 # Updated to use offline data
│   ├── localData.js              # Local fallback data
│   └── offlineData.js            # Generated offline data
├── scripts/
│   ├── fetch-offline-data.js     # Fetch data script
│   ├── download-images.js        # Download images script
│   └── build-offline-data.js     # Build offline data script
└── public/
    └── sw.js                      # Service worker (updated)
```

## How It Works

### Data Flow

1. **Backend API** → Scripts fetch all data
2. **Data Files** → Saved as JSON in `data/` directory
3. **Images** → Downloaded to `public/assets/offline-images/`
4. **Offline Data** → Generated in `Actions/offlineData.js`
5. **Frontend** → Uses offline data instead of API calls

### Frontend Behavior

- All API calls in `Actions/action.js` check `useLocalData()`
- If offline mode is enabled, functions return local data immediately
- Images are loaded from local assets folder
- Service worker caches everything for true offline functionality

## Updating Offline Data

To update the offline data with new content from the backend:

1. Run the setup scripts again:
   ```bash
   npm run setup-offline
   ```

2. The scripts will:
   - Fetch fresh data from backend
   - Download any new images
   - Update the offline data structure
   - Preserve existing images (won't re-download)

## Troubleshooting

### Images Not Loading

- Check that images were downloaded to `public/assets/offline-images/`
- Verify the image mapping in `data/image-mapping.json`
- Check browser console for 404 errors

### Data Not Showing

- Verify `Actions/offlineData.js` was generated correctly
- Check that `FORCE_OFFLINE_MODE` is set to `true` in `Actions/action.js`
- Clear browser cache and reload

### Service Worker Not Working

- Check browser console for service worker errors
- Verify `public/sw.js` is being served
- Try unregistering the service worker and reloading

## Testing Offline Functionality

1. **Build the app:**
   ```bash
   npm run build
   npm start
   ```

2. **Open in browser** and let service worker install

3. **Disable network** in browser DevTools (Network tab → Offline)

4. **Reload the page** - it should work completely offline

5. **Check:**
   - All pages load
   - Images display
   - Product data shows
   - Navigation works

## Notes

- The initial data fetch requires backend API access
- After setup, the site works completely offline
- Images are stored locally, so the site is self-contained
- Service worker provides additional caching layer
- All data is stored in the frontend codebase

## Support

If you encounter issues:
1. Check the console for errors
2. Verify all scripts completed successfully
3. Check that all files were generated
4. Review the file structure matches the expected layout
