import {
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
  FETCH_ORDER_PRODUCTS_SUCCESS,
  FETCH_ORDER_PRODUCTS_FAILED,
} from '../actions';

const initialState = {
  orders: [],
  products: [],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_ORDERS_SUCCESS:
    return { ...state, orders: action.value };
  case FETCH_ORDER_PRODUCTS_SUCCESS:
    return { ...state, products: action.value };
  case FETCH_ORDERS_FAILED:
  case FETCH_ORDER_PRODUCTS_FAILED:
  default:
    return state;
  }
}
