export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

export const FETCH_PRODUCT_CATEGORIES = 'FETCH_PRODUCT_CATEGORIES';
export const FETCH_PRODUCT_CATEGORIES_SUCCESS = 'FETCH_PRODUCT_CATEGORIES_SUCCESS';
export const FETCH_PRODUCT_CATEGORIES_FAILED = 'FETCH_PRODUCT_CATEGORIES_FAILED';

export function fetchProducts() {
  return { type: FETCH_PRODUCTS };
}

export function fetchProductsSuccess(data) {
  return { type: FETCH_PRODUCTS_SUCCESS, value: data };
}

export function fetchProductsFailed() {
  return { type: FETCH_PRODUCTS_FAILED };
}

export function fetchProductCategories() {
  return { type: FETCH_PRODUCT_CATEGORIES };
}

export function fetchProductCategoriesSuccess(data) {
  return { type: FETCH_PRODUCT_CATEGORIES_SUCCESS, value: data };
}

export function fetchProductCategoriesFailed() {
  return { type: FETCH_PRODUCT_CATEGORIES_FAILED };
}
