import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCT_CATEGORIES_SUCCESS,
  FETCH_PRODUCT_CATEGORIES_FAILED,
  CLEAR_PRODUCT_DETAILS,
  SUBMIT_PRODUCT_SUCCESS,
  SUBMIT_PRODUCT_FAILED,
  SUBMIT_PRODUCT_CATEGORY_SUCCESS,
  SUBMIT_PRODUCT_CATEGORY_FAILED,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILED,
  FETCH_PRODUCT_CATEGORY_DETAILS_SUCCESS,
  FETCH_PRODUCT_CATEGORY_DETAILS_FAILED,
} from '../actions';

const initialState = {
  products: { data: [], total: 0 },
  categories: { data: [], total: 0 },
  productDetails: {},
  categoryDetails: {},
  newSuccess: undefined,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.value };
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return { ...state, productDetails: action.value };
    case CLEAR_PRODUCT_DETAILS:
      return { ...state, productDetails: {} };
    case SUBMIT_PRODUCT_SUCCESS:
    case SUBMIT_PRODUCT_CATEGORY_SUCCESS:
      return { ...state, newSuccess: true };
    case SUBMIT_PRODUCT_FAILED:
    case SUBMIT_PRODUCT_CATEGORY_FAILED:
      return { ...state, newSuccess: false };
    case FETCH_PRODUCT_CATEGORIES_SUCCESS:
      return { ...state, categories: action.value };
    case FETCH_PRODUCT_CATEGORY_DETAILS_SUCCESS:
      return { ...state, categoryDetails: action.value };
    case FETCH_PRODUCTS_FAILED:
    case FETCH_PRODUCT_CATEGORIES_FAILED:
    case FETCH_PRODUCT_DETAILS_FAILED:
    case FETCH_PRODUCT_CATEGORY_DETAILS_FAILED:
    default:
      return state;
  }
}
