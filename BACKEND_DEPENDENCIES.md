# Backend Dependencies - Luxor Website

## Overview
This document explains which parts of the Luxor website are connected to the backend API and what data they fetch.

## Backend API Configuration

**API Base URL:** 
- Environment Variable: `NEXT_PUBLIC_API_BASE_URL` or `NEXT_PUBLIC_BASE_URL`
- Default Production: `https://api.luxorpen.com/v1`
- Local Development: `http://localhost:8000/v1`

---

## 🔌 Parts Connected to Backend

### 1. **Product Data (Main Dependency)**

#### API Endpoints Used:
- `GET /get-all-categories` - Product categories
- `GET /get-all-global-products` - All products (paginated)
- `GET /get-all-pens` - All pens
- `GET /get-all-marker-category` - Marker categories
- `GET /get-pen-category` - Pen subcategories
- `GET /get-cate-wise-products` - Products by category
- `GET /get-pen-by-id` - Single product details
- `GET /get-product-by-only-id` - Product by ID (POST)
- `GET /get-master-main-cat-wise-products` - Master category products

#### Pages/Components Using Product Data:

**✅ Homepage (`/pages/index.js`)**
- Fetches: Product categories via `allProductsCategory()`
- Used for: Displaying product categories on homepage
- **Has Fallback:** ✅ Yes (uses local data if offline)

**✅ Header Component (`/components/header/index.js`)**
- Fetches: 
  - Product categories (`allProductsCategory`)
  - Product subcategories (`newProductCategory`, `newProductSubCategory`)
- Used for: Navigation menu, product dropdowns
- **Has Fallback:** ✅ Yes (uses local data if offline)

**✅ Product Listing Page (`/pages/listing/[...index].js`)**
- Fetches: Products via `getAllGlobalProducts(_id, page_no)`
- Used for: Displaying product listings with pagination
- **Has Fallback:** ✅ Yes (uses local data if offline)

**✅ Product Detail Page (`/pages/product/[...index].js`)**
- Fetches: Single product via `getProductDetail(_id)`
- Used for: Product detail page with images, specs, popular picks
- **Has Fallback:** ✅ Yes (uses local data if offline)

---

### 2. **Form Submissions (No Fallback)**

#### API Endpoints Used:
- `POST /submit-contact` - Contact form submission
- `POST /v2/send-career` - Career form submission

#### Pages Using Form Submissions:

**❌ Contact Page (`/pages/contact/index.js`)**
- Sends: Contact form data (name, email, phone, company, requirements)
- Endpoint: `${NEXT_PUBLIC_BASE_URL}/submit-contact`
- **Has Fallback:** ❌ No - Requires backend to work

**❌ Career Page (`/pages/career/index.js`)**
- Sends: Career application (name, email, contact, profile, resume file)
- Endpoint: `${BASE_URL}/v2/send-career` (hardcoded: `https://api.luxorpen.com`)
- **Has Fallback:** ❌ No - Requires backend to work

---

## 📊 Data Flow Summary

### ✅ **Works Offline (Has Local Fallback)**
1. **Product Categories** - Homepage, Header navigation
2. **Product Listings** - All product pages
3. **Product Details** - Individual product pages
4. **Product Search** - Category filtering

**Fallback Mechanism:**
- Checks `navigator.onLine` status
- Falls back to `/Actions/localData.js` if offline
- All product functions in `/Actions/action.js` have offline support

### ❌ **Requires Backend (No Fallback)**
1. **Contact Form** - `/contact` page
2. **Career Form** - `/career` page

---

## 🔄 How Offline Mode Works

### Detection:
```javascript
const useLocalData = () => {
  return !navigator.onLine || process.env.USE_LOCAL_DATA === 'true';
};
```

### Fallback Flow:
1. Check if online → If offline, use local data
2. Try API call → If fails, catch error and return local data
3. Local data source: `/Actions/localData.js`

### Example (from `action.js`):
```javascript
export const allProductsCategory = (data) => {
  if (useLocalData()) {
    return Promise.resolve({
      status: true, 
      result: localCategories  // ← Local fallback
    });
  }
  
  // Try backend API
  const url = `${API_BASE_URL}/get-all-categories`;
  return axios.get(url, data)
    .then((res) => res.data)
    .catch(() => ({ status: false, result: [] })); // ← Fallback on error
};
```

---

## 📁 Files Involved

### Backend API Functions:
- `/Actions/action.js` - All API functions with offline fallback

### Local Data:
- `/Actions/localData.js` - Local product/category data for offline use

### Pages Using Backend:
- `/pages/index.js` - Homepage (categories)
- `/pages/listing/[...index].js` - Product listings
- `/pages/product/[...index].js` - Product details
- `/pages/contact/index.js` - Contact form (no fallback)
- `/pages/career/index.js` - Career form (no fallback)

### Components Using Backend:
- `/components/header/index.js` - Navigation menu

---

## 🎯 Summary

**What Works Without Backend:**
- ✅ Entire homepage
- ✅ Product browsing (categories, listings, details)
- ✅ Product search and filtering
- ✅ Navigation menu
- ✅ All static content (About, Overview, Quality, etc.)

**What Requires Backend:**
- ❌ Contact form submission
- ❌ Career application submission

**Percentage of Site Working Offline:** ~95%

The site is designed to work mostly offline with local data fallbacks. Only form submissions require an active backend connection.
