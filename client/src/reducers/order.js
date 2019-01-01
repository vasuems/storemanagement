import {
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
  FETCH_ORDER_DETAILS_SUCCESS,
  FETCH_ORDER_DETAILS_FAILED,
} from '../actions';

const initialState = {
  orders: { data: [], count: 0 },
  products: [],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return { ...state, orders: action.value };
    case FETCH_ORDER_DETAILS_SUCCESS:
      return { ...state, products: action.value };
    case FETCH_ORDERS_FAILED:
    case FETCH_ORDER_DETAILS_FAILED:
    default:
      return state;
  }
}
