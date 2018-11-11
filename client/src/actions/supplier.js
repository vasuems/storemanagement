export const FETCH_SUPPLIERS = 'FETCH_SUPPLIERS';
export const FETCH_SUPPLIERS_SUCCESS = 'FETCH_SUPPLIERS_SUCCESS';
export const FETCH_SUPPLIERS_FAILED = 'FETCH_SUPPLIERS_FAILED';

export const FETCH_SUPPLIER_DETAILS = 'FETCH_SUPPLIER_DETAILS';
export const FETCH_SUPPLIER_DETAILS_SUCCESS = 'FETCH_SUPPLIER_DETAILS_SUCCESS';
export const FETCH_SUPPLIER_DETAILS_FAILED = 'FETCH_SUPPLIER_DETAILS_FAILED';

export function fetchSuppliers() {
  return { type: FETCH_SUPPLIERS };
}

export function fetchSuppliersSuccess(data) {
  return { type: FETCH_SUPPLIERS_SUCCESS, value: data };
}

export function fetchSuppliersFailed() {
  return { type: FETCH_SUPPLIERS_FAILED };
}

export function fetchSupplierDetails() {
  return { type: FETCH_SUPPLIER_DETAILS };
}

export function fetchSupplierDetailsSuccess(data) {
  return { type: FETCH_SUPPLIER_DETAILS_SUCCESS, value: data };
}

export function fetchSupplierDetailsFailed() {
  return { type: FETCH_SUPPLIER_DETAILS_FAILED };
}

