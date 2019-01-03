import { call, all, takeEvery } from 'redux-saga/effects';
import { fetchOrders, fetchOrderDetails } from './order';
import {
  fetchProductCategories,
  fetchProducts,
  fetchProductDetails,
  fetchProductCategoryDetails,
  upsertProduct,
  addProductCategory,
} from './product';
import { fetchSalesReportProducts, fetchSalesReportCategories } from './report';
import { fetchDashboardData } from './dashboard';
import { fetchStoreSettings } from './setting';
import { submitLoginData, clearToken } from './auth';
import { fetchSuppliers, fetchSupplierDetails, addSupplier } from './supplier';
import {
  fetchManufacturers,
  fetchManufacturerDetails,
  addManufacturer,
} from './manufacturer';
import { fetchCountries, fetchCurrencies } from './public';
import { fetchAccount } from './account';
import {
  CLEAR_TOKEN,
  FETCH_ORDERS,
  FETCH_ORDER_DETAILS,
  FETCH_PRODUCT_CATEGORIES,
  FETCH_PRODUCT_CATEGORY_DETAILS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_DETAILS,
  SUBMIT_PRODUCT,
  SUBMIT_PRODUCT_CATEGORY,
  FETCH_SUPPLIERS,
  FETCH_SUPPLIER_DETAILS,
  SUBMIT_SUPPLIER,
  FETCH_MANUFACTURERS,
  FETCH_MANUFACTURER_DETAILS,
  SUBMIT_MANUFACTURER,
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
    takeEvery(CLEAR_TOKEN, clearToken),
    takeEvery(FETCH_ORDERS, fetchOrders),
    takeEvery(FETCH_ORDER_DETAILS, fetchOrderDetails),
    takeEvery(FETCH_PRODUCT_CATEGORIES, fetchProductCategories),
    takeEvery(FETCH_PRODUCTS, fetchProducts),
    takeEvery(FETCH_PRODUCT_DETAILS, fetchProductDetails),
    takeEvery(SUBMIT_PRODUCT, upsertProduct),
    takeEvery(SUBMIT_PRODUCT_CATEGORY, addProductCategory),
    takeEvery(FETCH_DASHBOARD_DATA, fetchDashboardData),
    takeEvery(FETCH_SALES_REPORT_PRODUCTS, fetchSalesReportProducts),
    takeEvery(FETCH_SALES_REPORT_CATEGORIES, fetchSalesReportCategories),
    takeEvery(FETCH_STORE_SETTINGS, fetchStoreSettings),
    takeEvery(SUBMIT_LOGIN_DATA, submitLoginData),
    takeEvery(FETCH_SUPPLIERS, fetchSuppliers),
    takeEvery(FETCH_SUPPLIER_DETAILS, fetchSupplierDetails),
    takeEvery(SUBMIT_SUPPLIER, addSupplier),
    takeEvery(FETCH_MANUFACTURERS, fetchManufacturers),
    takeEvery(SUBMIT_MANUFACTURER, addManufacturer),
    takeEvery(FETCH_MANUFACTURER_DETAILS, fetchManufacturerDetails),
    takeEvery(FETCH_PRODUCT_CATEGORY_DETAILS, fetchProductCategoryDetails),
    takeEvery(FETCH_COUNTRIES, fetchCountries),
    takeEvery(FETCH_CURRENCIES, fetchCurrencies),
    takeEvery(FETCH_ACCOUNT, fetchAccount),
  ]);
}
