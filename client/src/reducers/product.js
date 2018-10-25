import { FETCH_PRODUCTS_SUCCESS } from '../actions';

const initialState = {
  products: [],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.value };
    default:
      return state;
  }
}
