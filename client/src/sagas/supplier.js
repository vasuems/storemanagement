import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchSuppliersSuccess,
  fetchSuppliersFailed,
  fetchSupplierDetailsSuccess,
  fetchSupplierDetailsFailed,
  clearToken,
  submitSupplierSuccess,
  submitSupplierFailed,
} from '../actions';
import config from '../config';
import { supplierDetails } from '../apis/mocks/responses';

export function* fetchSuppliers(action) {
  try {
    const { storeId, pageNo, pageSize } = action.value;
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${storeId}/suppliers?page=${pageNo}&size=${pageSize}`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchSuppliersSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
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
      yield put(clearToken());
    } else {
      yield put(fetchSupplierDetailsFailed());
    }
  }
}

export function* addSupplier(action) {
  try {
    const { storeId } = action.value;
    const res = yield axios({
      method: 'post',
      url: `${config.apiDomain}/stores/${storeId}/suppliers`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
      data: action.value,
    });

    yield put(submitSupplierSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(submitSupplierFailed());
    }
  }
}