import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchOrdersSuccess,
  fetchOrdersFailed,
  fetchOrderDetailsSuccess,
  fetchOrderDetailsFailed,
  clearToken,
} from '../actions';
import { salesReportProducts } from '../apis/mocks/responses';
import config from '../config';

export function* fetchOrders(action) {
  try {
    const { storeId, pageNo, pageSize } = action.value;
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${storeId}/orders?page=${pageNo}&size=${pageSize}`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchOrdersSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(fetchOrdersFailed());
    }
  }
}

export function* fetchOrderDetails(action) {
  try {
    yield put(fetchOrderDetailsSuccess(salesReportProducts));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(fetchOrderDetailsFailed());
    }
  }
}
