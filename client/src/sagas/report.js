import { call, put } from 'redux-saga/effects';
import {
  fetchSalesReportProductsSuccess,
  fetchSalesReportProductsFailed,
  fetchSalesReportCategoriesSuccess,
  fetchSalesReportCategoriesFailed,
} from '../actions';
import {
  salesReportProducts,
  salesReportCategories,
} from '../apis/mocks/responses';

export function* fetchSalesReportProducts(action) {
  try {
    yield put(fetchSalesReportProductsSuccess(salesReportProducts));
  } catch (error) {
    yield put(fetchSalesReportProductsFailed());
  }
}

export function* fetchSalesReportCategories(action) {
  try {
    yield put(fetchSalesReportCategoriesSuccess(salesReportCategories));
  } catch (error) {
    yield put(fetchSalesReportCategoriesFailed());
  }
}
