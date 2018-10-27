import { call, put } from 'redux-saga/effects';
import {
  fetchOrdersSuccess,
  fetchOrdersFailed,
} from '../actions';
import { orders } from '../apis/mocks/responses';

export function* fetchOrders(action) {
  try {
    yield put(fetchOrdersSuccess(orders));
  } catch (error) {
    yield put(fetchOrdersFailed());
  }
}
