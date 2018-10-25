export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED';

export function fetchOrders() {
  return { type: FETCH_ORDERS };
}

export function fetchOrdersSuccess(data) {
  return { type: FETCH_ORDERS_SUCCESS, value: data };
}

export function fetchOrdersFailed() {
  return { type: FETCH_ORDERS_FAILED };
}
