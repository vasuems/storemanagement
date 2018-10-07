import { FETCH_FEATURED_PRODUCTS_SUCCESS } from '../../actions';

const initialState = {
  featuredProducts: [],
};

export default function featuredProductReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FEATURED_PRODUCTS_SUCCESS:
      return { ...state, featuredProducts: action.value };
    default:
      return state;
  }
}
