export const FETCH_SUPPLIERS = 'FETCH_SUPPLIERS';
export const FETCH_SUPPLIERS_SUCCESS = 'FETCH_SUPPLIERS_SUCCESS';
export const FETCH_SUPPLIERS_FAILED = 'FETCH_SUPPLIERS_FAILED';
export const CLEAR_SUPPLIER_DETAILS = 'CLEAR_SUPPLIER_DETAILS';

export const SUBMIT_SUPPLIER = 'SUBMIT_SUPPLIER';
export const SUBMIT_SUPPLIER_SUCCESS = 'SUBMIT_SUPPLIER_SUCCESS';
export const SUBMIT_SUPPLIER_FAILED = 'SUBMIT_SUPPLIER_FAILED';

export const FETCH_SUPPLIER_DETAILS = 'FETCH_SUPPLIER_DETAILS';
export const FETCH_SUPPLIER_DETAILS_SUCCESS = 'FETCH_SUPPLIER_DETAILS_SUCCESS';
export const FETCH_SUPPLIER_DETAILS_FAILED = 'FETCH_SUPPLIER_DETAILS_FAILED';

export function fetchSuppliers(data) {
  return { type: FETCH_SUPPLIERS, value: data };
}

export function fetchSuppliersSuccess(data) {
  return { type: FETCH_SUPPLIERS_SUCCESS, value: data };
}

export function fetchSuppliersFailed() {
  return { type: FETCH_SUPPLIERS_FAILED };
}

export function submitSupplier(data) {
  return { type: SUBMIT_SUPPLIER, value: data };
}

export function submitSupplierSuccess(data) {
  return { type: SUBMIT_SUPPLIER_SUCCESS, value: data };
}

export function submitSupplierFailed() {
  return { type: SUBMIT_SUPPLIER_FAILED };
}


export function fetchSupplierDetails(data) {
  return { type: FETCH_SUPPLIER_DETAILS, value: data };
}

export function fetchSupplierDetailsSuccess(data) {
  return { type: FETCH_SUPPLIER_DETAILS_SUCCESS, value: data };
}

export function fetchSupplierDetailsFailed() {
  return { type: FETCH_SUPPLIER_DETAILS_FAILED };
}

export function clearSupplierDetails() {
  return { type: CLEAR_SUPPLIER_DETAILS };
}

