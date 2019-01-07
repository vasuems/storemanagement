export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

export const FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCT_DETAILS';
export const CLEAR_PRODUCT_DETAILS = 'CLEAR_PRODUCT_DETAILS';
export const FETCH_PRODUCT_DETAILS_SUCCESS = 'FETCH_PRODUCT_DETAILS_SUCCESS';
export const FETCH_PRODUCT_DETAILS_FAILED = 'FETCH_PRODUCT_DETAILS_FAILED';

export const SUBMIT_PRODUCT = 'SUBMIT_PRODUCT';
export const SUBMIT_PRODUCT_SUCCESS = 'SUBMIT_PRODUCT_SUCCESS';
export const SUBMIT_PRODUCT_FAILED = 'SUBMIT_PRODUCT_FAILED';

export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS';
export const SEARCH_PRODUCT_FAILED = 'SEARCH_PRODUCT_FAILED';

export function fetchProducts(data) {
  return { type: FETCH_PRODUCTS, value: data };
}

export function fetchProductsSuccess(data) {
  return { type: FETCH_PRODUCTS_SUCCESS, value: data };
}

export function fetchProductsFailed() {
  return { type: FETCH_PRODUCTS_FAILED };
}

export function fetchProductDetails(data) {
  return { type: FETCH_PRODUCT_DETAILS, value: data };
}

export function clearProductDetails() {
  return { type: CLEAR_PRODUCT_DETAILS };
}

export function fetchProductDetailsSuccess(data) {
  return { type: FETCH_PRODUCT_DETAILS_SUCCESS, value: data };
}

export function fetchProductDetailsFailed() {
  return { type: FETCH_PRODUCT_DETAILS_FAILED };
}

export function submitProduct(data) {
  return { type: SUBMIT_PRODUCT, value: data };
}

export function submitProductSuccess(data) {
  return { type: SUBMIT_PRODUCT_SUCCESS, value: data };
}

export function submitProductFailed() {
  return { type: SUBMIT_PRODUCT_FAILED };
}

export function searchProduct(data) {
  return { type: SEARCH_PRODUCT, value: data };
}

export function searchProductSuccess(data) {
  return { type: SEARCH_PRODUCT_SUCCESS, value: data };
}

export function searchProductFailed() {
  return { type: SEARCH_PRODUCT_FAILED };
}