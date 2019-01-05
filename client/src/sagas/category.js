import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
  fetchParentCategoriesSuccess,
  fetchParentCategoriesFailed,
  submitCategorySuccess,
  submitCategoryFailed,
  fetchCategoryDetailsSuccess,
  fetchCategoryDetailsFailed,
  clearToken,
} from '../actions';
import config from '../config';

export function* fetchCategories(action) {
  try {
    const { storeId, pageNo, pageSize } = action.value;
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${storeId}/categories?page=${pageNo}&size=${pageSize}`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchCategoriesSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(fetchCategoriesFailed());
    }
  }
}

export function* fetchParentCategories(action) {
  try {
    const { storeId, pageNo, pageSize } = action.value;
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${storeId}/categories?page=${pageNo}&size=${pageSize}`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchParentCategoriesSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(fetchParentCategoriesFailed());
    }
  }
}

export function* fetchCategoryDetails(action) {
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

    yield put(fetchCategoryDetailsSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(fetchCategoryDetailsFailed());
    }
  }
}

export function* addCategory(action) {
  try {
    const res = yield axios({
      method: 'post',
      url: `${config.apiDomain}/stores/${action.value.storeId}/categories`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
      data: action.value,
    });

    yield put(submitCategorySuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(submitCategoryFailed());
    }
  }
}