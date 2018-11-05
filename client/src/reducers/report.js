import {
  FETCH_SALES_REPORT_PRODUCTS_SUCCESS,
  FETCH_SALES_REPORT_PRODUCTS_FAILED,
  FETCH_SALES_REPORT_CATEGORIES_SUCCESS,
  FETCH_SALES_REPORT_CATEGORIES_FAILED,
} from '../actions';

const initialState = {
  products: [],
  categories: [],
};

export default function reportReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_SALES_REPORT_PRODUCTS_SUCCESS:
    return { ...state, products: action.value };
  case FETCH_SALES_REPORT_CATEGORIES_SUCCESS:
    return { ...state, categories: action.value };
  case FETCH_SALES_REPORT_PRODUCTS_FAILED:
  case FETCH_SALES_REPORT_CATEGORIES_FAILED:
  default:
    return state;
  }
}
