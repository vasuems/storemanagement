import { FETCH_PRODUCT_DETAIL_SUCCESS } from "../../actions";

const initialState = {
  productDetail: null
};

export default function productDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL_SUCCESS:
      return { ...state, productDetail: action.value };
    default:
      return state;
  }
}