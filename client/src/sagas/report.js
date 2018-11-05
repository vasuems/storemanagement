import { call, put } from 'redux-saga/effects';
import {
  fetchSalesReportProductsSuccess,
  fetchSalesReportProductsFailed,
} from '../actions';
import { salesReportProducts } from '../apis/mocks/responses';

export function* fetchSalesReportProducts(action) {
  try {
    yield put(fetchSalesReportProductsSuccess(salesReportProducts));
  } catch (error) {
    yield put(fetchSalesReportProductsFailed());
  }
}