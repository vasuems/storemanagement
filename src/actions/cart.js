export const FETCH_CART = 'FETCH_CART';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_FAILED = 'FETCH_CART_FAILED';

export function fetchCart() {
  return { type: FETCH_CART };
}

export function fetchCartSuccess(data) {
  return { type: FETCH_CART_SUCCESS, value: data };
}

export function fetchCartFailed() {
  return { type: FETCH_CART_FAILED };
}
