export const FETCH_SALES_REPORT_PRODUCTS = 'FETCH_SALES_REPORT_PRODUCTS';
export const FETCH_SALES_REPORT_PRODUCTS_SUCCESS = 'FETCH_SALES_REPORT_PRODUCTS_SUCCESS';
export const FETCH_SALES_REPORT_PRODUCTS_FAILED = 'FETCH_SALES_REPORT_PRODUCTS_FAILED';

export function fetchSalesReportProducts() {
  return { type: FETCH_SALES_REPORT_PRODUCTS };
}

export function fetchSalesReportProductsSuccess(data) {
  return { type: FETCH_SALES_REPORT_PRODUCTS_SUCCESS, value: data };
}

export function fetchSalesReportProductsFailed() {
  return { type: FETCH_SALES_REPORT_PRODUCTS_FAILED };
}