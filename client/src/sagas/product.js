import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductCategoriesSuccess,
  fetchProductCategoriesFailed,
  fetchProductsSuccess,
  fetchProductsFailed,
  submitProductSuccess,
  submitProductFailed,
  submitProductCategorySuccess,
  submitProductCategoryFailed,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailed,
  fetchProductCategoryDetailsSuccess,
  fetchProductCategoryDetailsFailed,
  clearToken,
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
      yield put(clearToken());
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

export function* upsertProduct(action){
  try{
    const { value, mode } = action;
    const res = yield axios({
      method: mode === 'new' ? 'post' : 'put',
      url: `${config.apiDomain}/stores/${value.storeId}/products${mode === 'new' ? '' : '/' + value.productId}`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
      data: value,
    });

    yield put(submitProductSuccess(res.data));
  }catch(error){
    if (error.response.status === 401) {
      yield put(clearToken());
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
      yield put(clearToken());
    } else {
      yield put(fetchProductCategoryDetailsFailed());
    }
  }
}

export function* addProductCategory(action){
  try{
    const res = yield axios({
      method: 'post',
      url: `${config.apiDomain}/stores/${action.value.storeId}/categories`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
      data: action.value,
    });

    yield put(submitProductCategorySuccess(res.data));
  }catch(error){
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(submitProductCategoryFailed());
    }
  }
}