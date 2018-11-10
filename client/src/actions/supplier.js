export const FETCH_SUPPLIERS = 'FETCH_SUPPLIERS';
export const FETCH_SUPPLIERS_SUCCESS = 'FETCH_SUPPLIERS_SUCCESS';
export const FETCH_SUPPLIERS_FAILED = 'FETCH_SUPPLIERS_FAILED';

export function fetchSuppliers() {
  return { type: FETCH_SUPPLIERS };
}

export function fetchSuppliersSuccess(data) {
  return { type: FETCH_SUPPLIERS_SUCCESS, value: data };
}

export function fetchSuppliersFailed() {
  return { type: FETCH_SUPPLIERS_FAILED };
}
