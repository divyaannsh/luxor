import axios from "axios";
import CONSTANT from "constant";
import { localProducts, localCategories, popularProducts } from "./localData";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;

// Check if we're offline or want to use local data
const useLocalData = () => {
  return !navigator.onLine || process.env.USE_LOCAL_DATA === 'true';
};

//get-all-global-products(new collection created)
export const getAllGlobalProducts = (_id, page_no) => {
  if (useLocalData()) {
    return Promise.resolve({
      status: true,
      result: { 
        cat_wise_products: localProducts.slice(0, 12) 
      }
    });
  }
  
  const url = `${API_BASE_URL}/get-all-global-products?_id=${_id}&page_no=${page_no}`;
  return axios
    .get(url)
    .then((res) => {
      if (res.data.status) {
        return res.data;
      } else {
        return res.data;
      }
    })
    .catch(() => ({ status: false, result: { cat_wise_products: [], total: 0 } }));
};
export const getAllPens = (_id, page_no) => {
  if (useLocalData()) {
    return Promise.resolve({
      status: true,
      result: localProducts.filter(p => p.category === "Pens")
    });
  }
  
  const url = `${API_BASE_URL}/get-all-pens`;
  return axios
    .get(url)
    .then((res) => {
      if (res.data.status) {
        return res.data;
      } else {
        return res.data;
      }
    })
    .catch(() => ({ status: false, result: [] }));
};

export const getMarkerCategory = (data) => {
  if (useLocalData()) {
    return Promise.resolve({
      status: true,
      result: localProducts.filter(p => p.category === "Markers")
    });
  }
  
  const url = `${API_BASE_URL}/get-all-marker-category`;
  return axios
    .get(url, data)
    .then((res) => {
      if (res.data.status) {
        return res.data;
      } else {
        return res.data;
      }
    })
    .catch(() => ({ status: false, result: [] }));
};

export const allProductsCategory = (data) => {
  if (useLocalData()) {
    return Promise.resolve({
      status: true, 
      result: localCategories
    });
  }
  
  const url = `${API_BASE_URL}/get-all-categories`;
  return axios
    .get(url, data)
    .then((res) => {
      if (res.data.status) {
        return res.data;
      } else {
        return res.data;
      }
    })
    .catch(() => ({ status: false, result: [] }));
};

export const newProductCategory = (data) => {
  if (useLocalData()) {
    return Promise.resolve({
      status: true,
      result: localCategories
    });
  }
  
  const url = `${API_BASE_URL}/get-all-categories`;
  return axios
    .get(url, data)
    .then((res) => {
      if (res.data.status) {
        return res.data;
      } else {
        return res.data;
      }
    })
    .catch(() => ({ status: false, result: [] }));
};

export const newProductSubCategory = (data) => {
  if (useLocalData()) {
    return Promise.resolve({
      status: true,
      result: localCategories
    });
  }
  
  const url = `${API_BASE_URL}/get-pen-category`;
  return axios
    .get(url, data)
    .then((res) => {
      if (res.data.status) {
        return res.data;
      } else {
        return res.data;
      }
    })
    .catch(() => ({ status: false, result: [] }));
};

export const getCategoryWiseProducts = (_id, cat_type, page_no) => {
  if (useLocalData()) {
    let filtered = localProducts;
    if (cat_type) {
      filtered = localProducts.filter(p => p.cat_type === cat_type);
    }
    return Promise.resolve({
      status: true,
      result: { cat_wise_products: filtered }
    });
  }
  
  const url = `${API_BASE_URL}/get-cate-wise-products?_id=${_id}&cat_type=${cat_type}&page_no=${page_no}`;
  return axios
    .get(url)
    .then((res) => {
      if (res.data.status) {
        return res.data;
      } else {
        return res.data;
      }
    })
    .catch(() => ({ status: false, result: { cat_wise_products: [], total: 0 } }));
};

export const getProductDetail = async (_id) => {
  if (useLocalData()) {
    const product = localProducts.find(p => p._id === _id);
    return Promise.resolve({
      status: true,
      result: { 
        product: product || localProducts[0], 
        popular_pics: popularProducts 
      }
    });
  }
  
  const url = `${API_BASE_URL}/get-pen-by-id?_id=${_id}`;
  return axios
    .get(url)
    .then((res) => {
      if (res.data.status) {
        return res.data;
      } else {
        return res.data;
      }
    })
    .catch(() => ({ status: false, result: { product: {}, popular_pics: [] } }));
};

export const getProductByOnlyId = (model) => {
  if (useLocalData()) {
    const product = localProducts.find(p => p._id === model._id);
    return Promise.resolve({
      status: true,
      result: product || localProducts[0]
    });
  }
  
  const url = `${API_BASE_URL}/get-product-by-only-id`;
  return axios
    .post(url, model, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.data.status) {
        return res.data;
      } else {
        return res.data;
      }
    })
    .catch(() => ({ status: false, result: [] }));
};

export const getAllCatWiseProducts = async () => {
  const url = `${API_BASE_URL}/get-master-main-cat-wise-products`;
  try {
    const prods = await axios.get(url);
    return prods.data;
  } catch (err) {
    return err.message;
  }
};
