import { call, all, takeEvery } from 'redux-saga/effects';
import { fetchOrders, fetchOrderProducts } from './order';
import { fetchProductCategories, fetchProducts, fetchProductDetails } from './product';
import { fetchSalesReportProducts, fetchSalesReportCategories } from './report';
import { fetchDashboardData } from './dashboard';
import { fetchSiteSettings } from './setting';
import { submitLoginData } from './auth';
import { fetchSuppliers, fetchSupplierDetails } from './supplier';
import {
  FETCH_ORDERS,
  FETCH_ORDER_PRODUCTS,
  FETCH_PRODUCT_CATEGORIES,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_DETAILS,
  FETCH_SUPPLIERS,
  FETCH_SUPPLIER_DETAILS,
  FETCH_DASHBOARD_DATA,
  FETCH_SALES_REPORT_PRODUCTS,
  FETCH_SALES_REPORT_CATEGORIES,
  FETCH_SITE_SETTINGS,
  SUBMIT_LOGIN_DATA,
} from '../actions';

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_ORDERS, fetchOrders),
    takeEvery(FETCH_PRODUCT_CATEGORIES, fetchProductCategories),
    takeEvery(FETCH_PRODUCTS, fetchProducts),
    takeEvery(FETCH_PRODUCT_DETAILS, fetchProductDetails),
    takeEvery(FETCH_DASHBOARD_DATA, fetchDashboardData),
    takeEvery(FETCH_SALES_REPORT_PRODUCTS, fetchSalesReportProducts),
    takeEvery(FETCH_SALES_REPORT_CATEGORIES, fetchSalesReportCategories),
    takeEvery(FETCH_SITE_SETTINGS, fetchSiteSettings),
    takeEvery(FETCH_ORDER_PRODUCTS, fetchOrderProducts),
    takeEvery(SUBMIT_LOGIN_DATA, submitLoginData),
    takeEvery(FETCH_SUPPLIERS, fetchSuppliers),
    takeEvery(FETCH_SUPPLIER_DETAILS, fetchSupplierDetails),
  ]);
}
