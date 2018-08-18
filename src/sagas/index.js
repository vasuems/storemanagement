import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { 
  FETCH_NEW_PRODUCTS, FETCH_FEATURED_PRODUCTS, 
  FETCH_PRODUCT_DETAIL } from '../actions';
import { 
  fetchNewProducts, fetchFeaturedProducts, 
  fetchProductDetail } from './product';

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_NEW_PRODUCTS, fetchNewProducts),
    takeLatest(FETCH_FEATURED_PRODUCTS, fetchFeaturedProducts),
    takeLatest(FETCH_PRODUCT_DETAIL, fetchProductDetail),
  ]);
}