import { call, put } from 'redux-saga/effects';
import { fetchOrdersSuccess, fetchOrdersFailed, fetchOrderProductsSuccess, fetchOrderProductsFailed } from '../actions';
import { orders, salesReportProducts } from '../apis/mocks/responses';

export function* fetchOrders(action) {
  try {
    yield put(fetchOrdersSuccess(orders));
  } catch (error) {
    yield put(fetchOrdersFailed());
  }
}

export function* fetchOrderProducts(action) {
  try {
    yield put(fetchOrderProductsSuccess(salesReportProducts));
  } catch (error) {
    yield put(fetchOrderProductsFailed());
  }
}
