export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILED = 'FETCH_CUSTOMERS_FAILED';

export function fetchCustomers() {
  return { type: FETCH_CUSTOMERS };
}

export function fetchCustomersSuccess(data) {
  return { type: FETCH_CUSTOMERS_SUCCESS, value: data };
}

export function fetchCustomersFailed() {
  return { type: FETCH_CUSTOMERS_FAILED };
}