export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED';

export const FETCH_ORDER_DETAILS = 'FETCH_ORDER_DETAILS';
export const FETCH_ORDER_DETAILS_SUCCESS = 'FETCH_ORDER_DETAILS_SUCCESS';
export const FETCH_ORDER_DETAILS_FAILED = 'FETCH_ORDER_DETAILS_FAILED';

export function fetchOrders(data) {
  return { type: FETCH_ORDERS, value: data };
}

export function fetchOrdersSuccess(data) {
  return { type: FETCH_ORDERS_SUCCESS, value: data };
}

export function fetchOrdersFailed() {
  return { type: FETCH_ORDERS_FAILED };
}

export function fetchOrderDetails() {
  return { type: FETCH_ORDER_DETAILS };
}

export function fetchOrderDetailsSuccess(data) {
  return { type: FETCH_ORDER_DETAILS_SUCCESS, value: data };
}

export function fetchOrderDetailsFailed() {
  return { type: FETCH_ORDER_DETAILS_FAILED };
}
