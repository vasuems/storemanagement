export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

export const FETCH_NEW_PRODUCTS = 'FETCH_NEW_PRODUCTS';
export const FETCH_NEW_PRODUCTS_SUCCESS = 'FETCH_NEW_PRODUCTS_SUCCESS';
export const FETCH_NEW_PRODUCTS_FAILED = 'FETCH_NEW_PRODUCTS_FAILED';

export const FETCH_FEATURED_PRODUCTS = 'FETCH_FEATURED_PRODUCTS';
export const FETCH_FEATURED_PRODUCTS_SUCCESS =
  'FETCH_FEATURED_PRODUCTS_SUCCESS';
export const FETCH_FEATURED_PRODUCTS_FAILED = 'FETCH_FEATURED_PRODUCTS_FAILED';

export const FETCH_PRODUCT_DETAIL = 'FETCH_PRODUCT_DETAIL';
export const FETCH_PRODUCT_DETAIL_SUCCESS = 'FETCH_PRODUCT_DETAIL_SUCCESS';
export const FETCH_PRODUCT_DETAIL_FAILED = 'FETCH_PRODUCT_DETAIL_FAILED';

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const INC_PRODUCT = 'INC_PRODUCT';
export const DEC_PRODUCT = 'DEC_PRODUCT';

export function fetchProducts() {
  return { type: FETCH_PRODUCTS };
}

export function fetchProductsSuccess(data) {
  return { type: FETCH_PRODUCTS_SUCCESS, value: data };
}

export function fetchProductsFailed() {
  return { type: FETCH_PRODUCTS_FAILED };
}

export function fetchNewProducts() {
  return { type: FETCH_NEW_PRODUCTS };
}

export function fetchNewProductsSuccess(data) {
  return { type: FETCH_NEW_PRODUCTS_SUCCESS, value: data };
}

export function fetchNewProductsFailed() {
  return { type: FETCH_NEW_PRODUCTS_FAILED };
}

export function fetchFeaturedProducts() {
  return { type: FETCH_FEATURED_PRODUCTS };
}

export function fetchFeaturedProductsSuccess(data) {
  return { type: FETCH_FEATURED_PRODUCTS_SUCCESS, value: data };
}

export function fetchFeaturedProductsFailed() {
  return { type: FETCH_FEATURED_PRODUCTS_FAILED };
}

export function fetchProductDetail() {
  return { type: FETCH_PRODUCT_DETAIL };
}

export function fetchProductDetailSuccess(data) {
  return { type: FETCH_PRODUCT_DETAIL_SUCCESS, value: data };
}

export function fetchProductDetailFailed() {
  return { type: FETCH_PRODUCT_DETAIL_FAILED };
}

export function removeProduct() {
  return { type: REMOVE_PRODUCT };
}

export function increaseProduct() {
  return { type: INC_PRODUCT };
}

export function decreaseProduct() {
  return { type: DEC_PRODUCT };
}
