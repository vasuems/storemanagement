import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchOrdersSuccess,
  fetchOrdersFailed,
  fetchOrderProductsSuccess,
  fetchOrderProductsFailed,
  authFailed,
} from '../actions';
import { orders, salesReportProducts } from '../apis/mocks/responses';
import config from '../config';

export function* fetchOrders(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/asdfasdfasdfasd`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchOrdersSuccess(orders));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchOrdersFailed());
    }
  }
}

export function* fetchOrderProducts(action) {
  try {
    yield put(fetchOrderProductsSuccess(salesReportProducts));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchOrderProductsFailed());
    }
  }
}
