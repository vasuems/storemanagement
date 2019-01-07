import {
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
  FETCH_ORDER_DETAILS_SUCCESS,
  FETCH_ORDER_DETAILS_FAILED,
  CLEAR_ORDER_DETAILS,
} from '../actions';

const initialState = {
  orders: { data: [], count: 0 },
  products: [],
  loaded: false,
  done: false,
  error: false,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return { ...state, orders: action.value, loaded: true };
    case FETCH_ORDER_DETAILS_SUCCESS:
      return { ...state, products: action.value, loaded: true };
    case CLEAR_ORDER_DETAILS:
      return { ...state, ...initialState };
    case FETCH_ORDERS_FAILED:
    case FETCH_ORDER_DETAILS_FAILED:
      return { ...state, error: true };
    default:
      return state;
  }
}
