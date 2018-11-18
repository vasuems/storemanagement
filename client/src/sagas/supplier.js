import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchSuppliersSuccess,
  fetchSuppliersFailed,
  fetchSupplierDetailsSuccess,
  fetchSupplierDetailsFailed,
  authFailed,
} from '../actions';
import config from '../config';
import { suppliers, supplierDetails } from '../apis/mocks/responses';

export function* fetchSuppliers(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${action.value}/suppliers`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchSuppliersSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchSuppliersFailed());
    }
  }
}

export function* fetchSupplierDetails(action) {
  try {
    yield put(fetchSupplierDetailsSuccess(supplierDetails));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchSupplierDetailsFailed());
    }
  }
}
