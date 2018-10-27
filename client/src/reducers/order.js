import { FETCH_ORDERS_SUCCESS } from '../actions';

const initialState = {
  orders: [],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_ORDERS_SUCCESS:
    return { ...state, orders: action.value };
  default:
    return state;
  }
}
