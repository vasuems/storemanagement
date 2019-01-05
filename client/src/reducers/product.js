import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  CLEAR_PRODUCT_DETAILS,
  SUBMIT_PRODUCT_SUCCESS,
  SUBMIT_PRODUCT_FAILED,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILED,
} from '../actions';

const initialState = {
  products: { data: [], count: 0 },
  productDetails: {},
  done: false,
  error: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.value, done: true };
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return { ...state, productDetails: action.value, done: true };
    case SUBMIT_PRODUCT_SUCCESS:
      return { ...state, done: true };
    case SUBMIT_PRODUCT_FAILED:
    case FETCH_PRODUCTS_FAILED:
    case FETCH_PRODUCT_DETAILS_FAILED:
      return { ...state, error: true };
    case CLEAR_PRODUCT_DETAILS:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
