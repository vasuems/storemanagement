export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED';

export const FETCH_ORDER_PRODUCTS = 'FETCH_ORDER_PRODUCTS';
export const FETCH_ORDER_PRODUCTS_SUCCESS = 'FETCH_ORDER_PRODUCTS_SUCCESS';
export const FETCH_ORDER_PRODUCTS_FAILED = 'FETCH_ORDER_PRODUCTS_FAILED';

export function fetchOrders() {
  return { type: FETCH_ORDERS };
}

export function fetchOrdersSuccess(data) {
  return { type: FETCH_ORDERS_SUCCESS, value: data };
}

export function fetchOrdersFailed() {
  return { type: FETCH_ORDERS_FAILED };
}

export function fetchOrderProducts() {
  return { type: FETCH_ORDER_PRODUCTS };
}

export function fetchOrderProductsSuccess(data) {
  return { type: FETCH_ORDER_PRODUCTS_SUCCESS, value: data };
}

export function fetchOrderProductsFailed() {
  return { type: FETCH_ORDER_PRODUCTS_FAILED };
}
