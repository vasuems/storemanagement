import { call, all, takeLatest } from 'redux-saga/effects';
import { fetchOrders, fetchOrderProducts } from './order';
import {
  fetchProductCategories,
  fetchProducts,
  fetchProductDetails,
  fetchProductCategoryDetails,
} from './product';
import { fetchSalesReportProducts, fetchSalesReportCategories } from './report';
import { fetchDashboardData } from './dashboard';
import { fetchStoreSettings } from './setting';
import { submitLoginData } from './auth';
import { fetchSuppliers, fetchSupplierDetails } from './supplier';
import { fetchManufacturers, fetchManufacturerDetails } from './manufacturer';
import { fetchCountries, fetchCurrencies } from './public';
import {
  FETCH_ORDERS,
  FETCH_ORDER_PRODUCTS,
  FETCH_PRODUCT_CATEGORIES,
  FETCH_PRODUCT_CATEGORY_DETAILS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_DETAILS,
  FETCH_SUPPLIERS,
  FETCH_SUPPLIER_DETAILS,
  FETCH_MANUFACTURERS,
  FETCH_MANUFACTURER_DETAILS,
  FETCH_DASHBOARD_DATA,
  FETCH_SALES_REPORT_PRODUCTS,
  FETCH_SALES_REPORT_CATEGORIES,
  FETCH_STORE_SETTINGS,
  SUBMIT_LOGIN_DATA,
  FETCH_COUNTRIES,
  FETCH_CURRENCIES,
} from '../actions';

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_ORDERS, fetchOrders),
    takeLatest(FETCH_PRODUCT_CATEGORIES, fetchProductCategories),
    takeLatest(FETCH_PRODUCTS, fetchProducts),
    takeLatest(FETCH_PRODUCT_DETAILS, fetchProductDetails),
    takeLatest(FETCH_DASHBOARD_DATA, fetchDashboardData),
    takeLatest(FETCH_SALES_REPORT_PRODUCTS, fetchSalesReportProducts),
    takeLatest(FETCH_SALES_REPORT_CATEGORIES, fetchSalesReportCategories),
    takeLatest(FETCH_STORE_SETTINGS, fetchStoreSettings),
    takeLatest(FETCH_ORDER_PRODUCTS, fetchOrderProducts),
    takeLatest(SUBMIT_LOGIN_DATA, submitLoginData),
    takeLatest(FETCH_SUPPLIERS, fetchSuppliers),
    takeLatest(FETCH_SUPPLIER_DETAILS, fetchSupplierDetails),
    takeLatest(FETCH_MANUFACTURERS, fetchManufacturers),
    takeLatest(FETCH_MANUFACTURER_DETAILS, fetchManufacturerDetails),
    takeLatest(FETCH_PRODUCT_CATEGORY_DETAILS, fetchProductCategoryDetails),
    takeLatest(FETCH_COUNTRIES, fetchCountries),
    takeLatest(FETCH_CURRENCIES, fetchCurrencies),
  ]);
}
