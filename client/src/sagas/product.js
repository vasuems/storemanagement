import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductsSuccess,
  fetchProductsFailed,
  submitProductSuccess,
  submitProductFailed,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailed,
  clearToken,
} from '../actions';
import config from '../config';

export function* fetchProducts(action) {
  try {
    const { storeId, pageNo, pageSize } = action.value;
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${storeId}/products?page=${pageNo}&size=${pageSize}`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchProductsSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(fetchProductsFailed());
    }
  }
}

export function* fetchProductDetails(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${action.value.storeId}/products/${
        action.value.productId
        }`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchProductDetailsSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(fetchProductDetailsFailed());
    }
  }
}

export function* upsertProduct(action) {
  try {
    const { value } = action;
    const res = yield axios({
      method: value.mode === 'new' ? 'post' : 'put',
      url: `${config.apiDomain}/stores/${value.storeId}/products${value.mode === 'new' ? '' : '/' + value.productId}`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
      data: value,
    });

    yield put(submitProductSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(submitProductFailed());
    }
  }
}