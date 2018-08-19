import { call, put } from 'redux-saga/effects';
import {
  fetchNewProductsSuccess,
  fetchNewProductsFailed,
  fetchFeaturedProductsSuccess,
  fetchFeaturedProductsFailed,
  fetchProductDetailSuccess,
  fetchProductDetailFailed
} from '../actions';
import {
  newProducts,
  featuredProducts,
  productDetail
} from '../apis/mocks/responses';

export function* fetchNewProducts(action) {
  try {
    yield put(fetchNewProductsSuccess(newProducts));
  } catch (error) {
    yield put(fetchNewProductsFailed());
  }
}

export function* fetchFeaturedProducts(action) {
  try {
    yield put(fetchFeaturedProductsSuccess(featuredProducts));
  } catch (error) {
    yield put(fetchFeaturedProductsFailed());
  }
}

export function* fetchProductDetail(action) {
  try {
    yield put(fetchProductDetailSuccess(productDetail));
  } catch (error) {
    yield put(fetchProductDetailFailed());
  }
}
