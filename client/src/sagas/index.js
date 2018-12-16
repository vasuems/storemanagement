import { call, all, takeEvery } from 'redux-saga/effects';
import { fetchOrders, fetchOrderProducts } from './order';
import {
  fetchProductCategories,
  fetchProducts,
  fetchProductDetails,
  fetchProductCategoryDetails,
  addProduct,
} from './product';
import { fetchSalesReportProducts, fetchSalesReportCategories } from './report';
import { fetchDashboardData } from './dashboard';
import { fetchStoreSettings } from './setting';
import { submitLoginData } from './auth';
import { fetchSuppliers, fetchSupplierDetails } from './supplier';
import { fetchManufacturers, fetchManufacturerDetails } from './manufacturer';
import { fetchCountries, fetchCurrencies } from './public';
import { fetchAccount } from './account';
import {
  FETCH_ORDERS,
  FETCH_ORDER_PRODUCTS,
  FETCH_PRODUCT_CATEGORIES,
  FETCH_PRODUCT_CATEGORY_DETAILS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_DETAILS,
  SUBMIT_PRODUCT,
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
  FETCH_ACCOUNT,
} from '../actions';

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_ORDERS, fetchOrders),
    takeEvery(FETCH_PRODUCT_CATEGORIES, fetchProductCategories),
    takeEvery(FETCH_PRODUCTS, fetchProducts),
    takeEvery(FETCH_PRODUCT_DETAILS, fetchProductDetails),
    takeEvery(SUBMIT_PRODUCT, addProduct),
    takeEvery(FETCH_DASHBOARD_DATA, fetchDashboardData),
    takeEvery(FETCH_SALES_REPORT_PRODUCTS, fetchSalesReportProducts),
    takeEvery(FETCH_SALES_REPORT_CATEGORIES, fetchSalesReportCategories),
    takeEvery(FETCH_STORE_SETTINGS, fetchStoreSettings),
    takeEvery(FETCH_ORDER_PRODUCTS, fetchOrderProducts),
    takeEvery(SUBMIT_LOGIN_DATA, submitLoginData),
    takeEvery(FETCH_SUPPLIERS, fetchSuppliers),
    takeEvery(FETCH_SUPPLIER_DETAILS, fetchSupplierDetails),
    takeEvery(FETCH_MANUFACTURERS, fetchManufacturers),
    takeEvery(FETCH_MANUFACTURER_DETAILS, fetchManufacturerDetails),
    takeEvery(FETCH_PRODUCT_CATEGORY_DETAILS, fetchProductCategoryDetails),
    takeEvery(FETCH_COUNTRIES, fetchCountries),
    takeEvery(FETCH_CURRENCIES, fetchCurrencies),
    takeEvery(FETCH_ACCOUNT, fetchAccount),
  ]);
}
