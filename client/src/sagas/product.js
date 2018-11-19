import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductCategoriesSuccess,
  fetchProductCategoriesFailed,
  fetchProductsSuccess,
  fetchProductsFailed,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailed,
  fetchProductCategoryDetailsSuccess,
  fetchProductCategoryDetailsFailed,
  authFailed,
} from '../actions';
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
    const { storeCode, pageNo, pageSize } = action.value;
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${storeCode}/products?page=${pageNo}&size=${pageSize}`,
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
      url: `${config.apiDomain}/stores/${action.value.storeCode}/products/${
        action.value.productCode
      }`,
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

export function* fetchProductCategoryDetails(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${action.value.storeCode}/categories/${
        action.value.categoryCode
      }`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchProductCategoryDetailsSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchProductCategoryDetailsFailed());
    }
  }
}
