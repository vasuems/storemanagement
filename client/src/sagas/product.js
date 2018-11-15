import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductCategoriesSuccess,
  fetchProductCategoriesFailed,
  fetchProductsSuccess,
  fetchProductsFailed,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailed,
} from '../actions';
import { categories, products, productDetails } from '../apis/mocks/responses';
import config from '../config';

export function* fetchProductCategories(action) {
  try {
    yield put(fetchProductCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchProductCategoriesFailed());
  }
}

export function* fetchProducts(action) {
  try {
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailed());
  }
}

export function* fetchProductDetails(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/products/${action.value}`,
      headers: {
        'authorization': localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchProductDetailsSuccess(productDetails));
  } catch (error) {
    yield put(fetchProductDetailsFailed());
  }
}
