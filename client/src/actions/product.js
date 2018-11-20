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

export const FETCH_PRODUCT_CATEGORIES = 'FETCH_PRODUCT_CATEGORIES';
export const FETCH_PRODUCT_CATEGORIES_SUCCESS =
  'FETCH_PRODUCT_CATEGORIES_SUCCESS';
export const FETCH_PRODUCT_CATEGORIES_FAILED =
  'FETCH_PRODUCT_CATEGORIES_FAILED';

export const FETCH_PRODUCT_CATEGORY_DETAILS = 'FETCH_PRODUCT_CATEGORY_DETAILS';
export const FETCH_PRODUCT_CATEGORY_DETAILS_SUCCESS =
  'FETCH_PRODUCT_CATEGORY_DETAILS_SUCCESS';
export const FETCH_PRODUCT_CATEGORY_DETAILS_FAILED =
  'FETCH_PRODUCT_CATEGORY_DETAILS_FAILED';

export const FETCH_PRODUCT_PARENT_CATEGORIES =
  'FETCH_PRODUCT_PARENT_CATEGORIES';
export const FETCH_PRODUCT_PARENT_CATEGORIES_SUCCESS =
  'FETCH_PRODUCT_PARENT_CATEGORIES_SUCCESS';
export const FETCH_PRODUCT_PARENT_CATEGORIES_FAILED =
  'FETCH_PRODUCT_PARENT_CATEGORIES_FAILED';

export function fetchProducts(data) {
  return { type: FETCH_PRODUCTS, value: data };
}

export function fetchProductsSuccess(data) {
  return { type: FETCH_PRODUCTS_SUCCESS, value: data };
}

export function fetchProductsFailed() {
  return { type: FETCH_PRODUCTS_FAILED };
}

export function fetchProductCategories(data) {
  return { type: FETCH_PRODUCT_CATEGORIES, value: data };
}

export function fetchProductCategoriesSuccess(data) {
  return { type: FETCH_PRODUCT_CATEGORIES_SUCCESS, value: data };
}

export function fetchProductCategoriesFailed() {
  return { type: FETCH_PRODUCT_CATEGORIES_FAILED };
}

export function fetchProductDetails(data) {
  return { type: FETCH_PRODUCT_DETAILS, value: data };
}

export function clearProductDetails(){
  return { type: CLEAR_PRODUCT_DETAILS };
}

export function fetchProductDetailsSuccess(data) {
  return { type: FETCH_PRODUCT_DETAILS_SUCCESS, value: data };
}

export function fetchProductDetailsFailed() {
  return { type: FETCH_PRODUCT_DETAILS_FAILED };
}

export function submitProduct(data){
  console.log(data);
  return { type: SUBMIT_PRODUCT, value: data };
}

export function submitProductSuccess(data){
  return { type: SUBMIT_PRODUCT_SUCCESS, value: data };
}

export function submitProductFailed(){
  return { type: SUBMIT_PRODUCT_FAILED };
}

export function fetchProductCategoryDetails(data) {
  return { type: FETCH_PRODUCT_CATEGORY_DETAILS, value: data };
}

export function fetchProductCategoryDetailsSuccess(data) {
  return { type: FETCH_PRODUCT_CATEGORY_DETAILS_SUCCESS, value: data };
}

export function fetchProductCategoryDetailsFailed() {
  return { type: FETCH_PRODUCT_CATEGORY_DETAILS_FAILED };
}
