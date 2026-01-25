import axios from "axios";
import CONSTANT from "constant";
import { localProducts, localCategories, popularProducts, localPenSubCategories, localMarkerSubCategories } from "./localData";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;

// Always use local data - NO BACKEND DEPENDENCY
// This makes the app completely frontend-only
const useLocalData = () => {
  return true; // Always return true - no backend calls
};

//get-all-global-products(new collection created)
// FRONTEND ONLY - NO BACKEND CALLS
export const getAllGlobalProducts = async (_id, page_no) => {
  // Always return local products - no API calls
  const products = localProducts.map(product => ({
    ...product,
    // Ensure root_folder_name and file_name are set for image display
    root_folder_name: product.root_folder_name || (product.image ? product.image.substring(0, product.image.lastIndexOf('/') + 1) : 'assets/new_launches/'),
    file_name: product.file_name || (product.image ? product.image.substring(product.image.lastIndexOf('/') + 1) : ''),
  }));
  
  return Promise.resolve({
    status: true,
    result: { 
      cat_wise_products: products,
      total: products.length
    }
  });
};
// FRONTEND ONLY - NO BACKEND CALLS
export const getAllPens = (_id, page_no) => {
  return Promise.resolve({
    status: true,
    result: localProducts.filter(p => p.category === "Pens")
  });
};

// FRONTEND ONLY - NO BACKEND CALLS
export const getMarkerCategory = (data) => {
  return Promise.resolve({
    status: true,
    result: localProducts.filter(p => p.category === "Markers")
  });
};

// FRONTEND ONLY - NO BACKEND CALLS
export const allProductsCategory = (data) => {
  return Promise.resolve({
    status: true, 
    result: localCategories
  });
};

// FRONTEND ONLY - NO BACKEND CALLS
export const newProductCategory = (data) => {
  return Promise.resolve({
    status: true,
    result: localCategories
  });
};

// FRONTEND ONLY - NO BACKEND CALLS
export const newProductSubCategory = (data) => {
  // Return combined pen and marker subcategories
  const allSubCategories = [
    ...(localPenSubCategories || []),
    ...(localMarkerSubCategories || [])
  ];
  return Promise.resolve({
    status: true,
    result: allSubCategories
  });
};

// FRONTEND ONLY - NO BACKEND CALLS
export const getCategoryWiseProducts = (_id, cat_type, page_no) => {
  let filtered = localProducts;
  if (cat_type) {
    filtered = localProducts.filter(p => p.cat_type === cat_type || p.category?.toLowerCase() === cat_type?.toLowerCase());
  }
  return Promise.resolve({
    status: true,
    result: { cat_wise_products: filtered, total: filtered.length }
  });
};

// FRONTEND ONLY - NO BACKEND CALLS
export const getProductDetail = async (_id) => {
  const product = localProducts.find(p => p._id === _id) || localProducts[0];
  // Ensure product has required fields for image display
  if (product && !product.root_folder_name && product.image) {
    // Extract folder and filename from image path
    const imagePath = product.image.replace(/^\//, ''); // Remove leading slash
    const lastSlash = imagePath.lastIndexOf('/');
    if (lastSlash !== -1) {
      product.root_folder_name = imagePath.substring(0, lastSlash + 1);
      product.file_name = imagePath.substring(lastSlash + 1);
    } else {
      product.root_folder_name = "assets/new_launches/";
      product.file_name = imagePath;
    }
  }
  return Promise.resolve({
    status: true,
    result: { 
      product: product, 
      popular_pics: popularProducts 
    }
  });
};

// FRONTEND ONLY - NO BACKEND CALLS
export const getProductByOnlyId = (model) => {
  const product = localProducts.find(p => p._id === model?._id || p._id === model);
  return Promise.resolve({
    status: true,
    result: product || localProducts[0]
  });
};

// FRONTEND ONLY - NO BACKEND CALLS
export const getAllCatWiseProducts = async () => {
  // Return local products organized by category
  const catWiseProducts = {};
  localCategories.forEach(cat => {
    catWiseProducts[cat._id] = {
      cat_wise_products: localProducts.filter(p => 
        p.category === cat.name || 
        p.category?.toLowerCase() === cat.name?.toLowerCase()
      ),
      total: localProducts.filter(p => 
        p.category === cat.name || 
        p.category?.toLowerCase() === cat.name?.toLowerCase()
      ).length
    };
  });
  
  return Promise.resolve({
    status: true,
    result: catWiseProducts
  });
};
