import { FETCH_CART_SUCCESS } from '../../actions';

const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_SUCCESS:
      return { ...state, cart: action.value };
    default:
      return state;
  }
}
