export const FETCH_NEW_PRODUCTS = 'FETCH_NEW_ARRIVALS';
export const FETCH_NEW_PRODUCTS_SUCCESS = 'FETCH_NEW_ARRIVALS_SUCCESS';
export const FETCH_NEW_PRODUCTS_FAILED = 'FETCH_NEW_ARRIVALS_FAILED';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const INC_PRODUCT = 'INC_PRODUCT';
export const DEC_PRODUCT = 'DEC_PRODUCT';


export function fetchNewProducts() {
  return { type: FETCH_NEW_PRODUCTS };
}

export function fetchNewProductsSuccess(data) {
  return { type: FETCH_NEW_PRODUCTS_SUCCESS, value: data };
}

export function fetchNewProductsFailed() {
  return { type: FETCH_NEW_PRODUCTS_FAILED };
}

export function removeProduct() {
  return { type: REMOVE_PRODUCT };
}

export function increaseProduct() {
  return { type: INC_PRODUCT };
}

export function decreaseProduct() {
  return { type: DEC_PRODUCT };
}