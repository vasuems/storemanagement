import { 
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCT_CATEGORIES_SUCCESS,
  FETCH_PRODUCT_CATEGORIES_FAILED,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILED
} from '../actions';

const initialState = {
  products: [],
  categories: [],
  productDetails: {},
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_PRODUCTS_SUCCESS:
    return { ...state, products: action.value };
  case FETCH_PRODUCT_DETAILS_SUCCESS:
    return { ...state, productDetails: action.value };
  case FETCH_PRODUCT_CATEGORIES_SUCCESS:
    return { ...state, categories: action.value };
  case FETCH_PRODUCTS_FAILED:
  case FETCH_PRODUCT_CATEGORIES_FAILED:
  case FETCH_PRODUCT_DETAILS_FAILED:
  default:
    return state;
  }
}