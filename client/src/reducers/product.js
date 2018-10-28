import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_CATEGORIES_SUCCESS } from '../actions';

const initialState = {
  products: [],
  categories: [],
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_PRODUCTS_SUCCESS:
    return { ...state, products: action.value };
  case FETCH_PRODUCT_CATEGORIES_SUCCESS:
    return { ...state, categories: action.value };
  default:
    return state;
  }
}