# Quick Start: Offline Setup

## 🚀 Quick Setup (3 Steps)

### Step 1: Install Dependencies
```bash
cd Luxor
npm install
```

### Step 2: Run Setup Scripts
```bash
npm run setup-offline
```

This will:
- ✅ Fetch all data from backend API
- ✅ Download all images to `public/assets/offline-images/`
- ✅ Build offline data structure

### Step 3: Build and Test
```bash
npm run build
npm start
```

## 📋 What Gets Created

After running setup, you'll have:

```
Luxor/
├── data/                          # All backend data
│   ├── categories.json
│   ├── global-products.json
│   ├── pens.json
│   ├── image-urls.json
│   ├── image-mapping.json
│   └── all-data.json
│
├── public/assets/offline-images/  # All downloaded images
│   └── [all product images]
│
└── Actions/offlineData.js        # Generated offline data
```

## ⚙️ Configuration

### Set API URL (if needed)

Create `.env` file:
```
API_BASE_URL=https://api.luxorpen.com/v1
```

Or set environment variable:
```bash
export API_BASE_URL=https://api.luxorpen.com/v1
```

## ✅ Verify It Works

1. Open browser: `http://localhost:3000`
2. Open DevTools → Network tab
3. Enable "Offline" mode
4. Reload page
5. Site should work completely offline! 🎉

## 🔄 Update Data Later

When you need to update offline data:
```bash
npm run setup-offline
```

## 📚 More Information

- **Detailed Setup**: See `OFFLINE_SETUP.md`
- **How It Works**: See `BACKEND_TO_OFFLINE_GUIDE.md`

## 🐛 Troubleshooting

**Images not loading?**
- Check `public/assets/offline-images/` has images
- Verify `data/image-mapping.json` exists

**Data not showing?**
- Check `Actions/offlineData.js` was generated
- Verify `FORCE_OFFLINE_MODE = true` in `Actions/action.js`

**Service worker issues?**
- Clear browser cache
- Unregister service worker in DevTools
- Reload page

## 💡 Tips

- First run may take time (downloading all images)
- Images are cached, so re-runs are faster
- All data is stored locally - no backend needed after setup!
