export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED';

export const FETCH_ORDER_DETAILS = 'FETCH_ORDER_DETAILS';
export const CLEAR_ORDER_DETAILS = 'CLEAR_ORDER_DETAILS';
export const FETCH_ORDER_DETAILS_SUCCESS = 'FETCH_ORDER_DETAILS_SUCCESS';
export const FETCH_ORDER_DETAILS_FAILED = 'FETCH_ORDER_DETAILS_FAILED';

export const SUBMIT_ORDER = 'SUBMIT_ORDER';
export const SUBMIT_ORDER_SUCCESS = 'SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_FAILED = 'SUBMIT_ORDER_FAILED';

export const ADD_ORDER_PRODUCT = 'ADD_ORDER_PRODUCT';
export const SELECT_ORDER_PRODUCT = 'SELECT_ORDER_PRODUCT';
export const CLEAR_ORDER_SEARCHED_PRODUCT_RESULT = 'CLEAR_ORDER_SEARCHED_PRODUCT_RESULT';

export function fetchOrders(data) {
  return { type: FETCH_ORDERS, value: data };
}

export function fetchOrdersSuccess(data) {
  return { type: FETCH_ORDERS_SUCCESS, value: data };
}

export function fetchOrdersFailed() {
  return { type: FETCH_ORDERS_FAILED };
}

export function fetchOrderDetails(data) {
  return { type: FETCH_ORDER_DETAILS, value: data };
}

export function clearOrderDetails() {
  return { type: CLEAR_ORDER_DETAILS };
}

export function fetchOrderDetailsSuccess(data) {
  return { type: FETCH_ORDER_DETAILS_SUCCESS, value: data };
}

export function fetchOrderDetailsFailed() {
  return { type: FETCH_ORDER_DETAILS_FAILED };
}

export function submitOrder(data) {
  return { type: SUBMIT_ORDER, value: data };
}

export function submitOrderSuccess(data) {
  return { type: SUBMIT_ORDER_SUCCESS, value: data };
}

export function submitOrderFailed() {
  return { type: SUBMIT_ORDER_FAILED };
}

export function addOrderProduct(data) {
  return { type: ADD_ORDER_PRODUCT, value: data };
}

export function selectOrderProduct(data) {
  return { type: SELECT_ORDER_PRODUCT, value: data };
}

export function clearOrderSearchedProductResult() {
  return { type: CLEAR_ORDER_SEARCHED_PRODUCT_RESULT };
}