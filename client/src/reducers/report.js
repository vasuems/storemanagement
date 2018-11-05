import {
  FETCH_SALES_REPORT_PRODUCTS_SUCCESS,
  FETCH_SALES_REPORT_PRODUCTS_FAILED,
} from '../actions';

const initialState = {
  products: [],
};

export default function reportReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_SALES_REPORT_PRODUCTS_SUCCESS:
    return { ...state, products: action.value };
  case FETCH_SALES_REPORT_PRODUCTS_FAILED:
  default:
    return state;
  }
}
