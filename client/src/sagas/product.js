import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductCategoriesSuccess,
  fetchProductCategoriesFailed,
  fetchProductsSuccess,
  fetchProductsFailed,
  submitProductSuccess,
  submitProductFailed,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailed,
  fetchProductCategoryDetailsSuccess,
  fetchProductCategoryDetailsFailed,
  authFailed,
} from '../actions';
import config from '../config';

export function* fetchProductCategories(action) {
  try {
    const { storeId, pageNo, pageSize } = action.value;
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${storeId}/categories?page=${pageNo}&size=${pageSize}`,
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
      yield put(authFailed());
    } else {
      yield put(fetchProductDetailsFailed());
    }
  }
}

export function* addProduct(action){
  try{
    const res = yield axios({
      method: 'post',
      url: `${config.apiDomain}/stores/${action.value.storeId}/products`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
      data: action.value,
    });
    console.log(res);
    yield put(submitProductSuccess(res.data));
  }catch(error){
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(submitProductFailed());
    }
  }
}

export function* fetchProductCategoryDetails(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${action.value.storeId}/categories/${
        action.value.categoryId
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
