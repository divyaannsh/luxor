import axios from "axios";
import CONSTANT from "constant";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;

//get-all-global-products(new collection created)
export const getAllGlobalProducts = (_id, page_no) => {
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
    .catch(() => ({ status: false, result: { cat_wise_products: [] } }));
};
export const getAllPens = (_id, page_no) => {
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

//new collection updated
export const newProductCategory = (data) => {
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

//new collected updated for sub-category
export const newProductSubCategory = (data) => {
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
    .catch(() => ({ status: false, result: { cat_wise_products: [] } }));
};

export const getProductDetail = async (_id) => {
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
    .catch(() => ({ status: false, result: {} }));
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
