import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductCategoriesSuccess,
  fetchProductCategoriesFailed,
  fetchProductsSuccess,
  fetchProductsFailed,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailed,
  authFailed,
} from '../actions';
import { categories, products, productDetails } from '../apis/mocks/responses';
import config from '../config';

export function* fetchProductCategories(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${action.value}/categories`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });
    yield put(fetchProductCategoriesSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchProductCategoriesFailed());
    }
  }
}

export function* fetchProducts(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${action.value}/products`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchProductsSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchProductsFailed());
    }
  }
}

export function* fetchProductDetails(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/products/${action.value}`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchProductDetailsSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchProductDetailsFailed());
    }
  }
}
