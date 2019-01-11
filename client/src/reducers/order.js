import {
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
  FETCH_ORDER_DETAILS_SUCCESS,
  FETCH_ORDER_DETAILS_FAILED,
  SUBMIT_ORDER_SUCCESS,
  SUBMIT_ORDER_FAILED,
  CLEAR_ORDER_DETAILS,
  ADD_ORDER_PRODUCT,
  REMOVE_ORDER_PRODUCT,
  SELECT_ORDER_PRODUCT,
  CLEAR_ORDER_SEARCHED_PRODUCT_RESULT,
} from '../actions';

const initialState = {
  orders: { data: [], count: 0 },
  products: [],
  searchedProducts: [],
  productSelected: {},
  orderDetails: {},
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
    case ADD_ORDER_PRODUCT: {
      const newProductList = [...state.products];

      newProductList.forEach(product => {
        if (product.code === action.value.code) {
          product.quantity = product.quantity + action.value.quantity;
          product.amount = product.amount + action.value.amount;
          action.value = null;
        }
      });

      if (action.value) {
        newProductList.push(action.value);
      }

      return { ...state, products: newProductList };
    }
    case REMOVE_ORDER_PRODUCT: {
      const newProductList = [...state.products];

      newProductList.forEach((product, index, object) => {
        if (product.code === action.value) {
          object.splice(index, 1);
          return;
        }
      });

      return { ...state, products: newProductList };
    }
    case SUBMIT_ORDER_SUCCESS:
      return { ...state, orderDetails: action.value, done: true };
    case SELECT_ORDER_PRODUCT:
      return { ...state, productSelected: action.value };
    case CLEAR_ORDER_SEARCHED_PRODUCT_RESULT:
      return { ...state, productSelected: {} };
    case CLEAR_ORDER_DETAILS:
      return { ...state, ...initialState };
    case FETCH_ORDERS_FAILED:
    case FETCH_ORDER_DETAILS_FAILED:
    case SUBMIT_ORDER_FAILED:
      return { ...state, error: true };
    default:
      return state;
  }
}
