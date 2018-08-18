import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { FETCH_NEW_PRODUCTS, FETCH_FEATURED_PRODUCTS } from '../actions';
import { fetchNewProducts, fetchFeaturedProducts } from './product';

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_NEW_PRODUCTS, fetchNewProducts),
    takeLatest(FETCH_FEATURED_PRODUCTS, fetchFeaturedProducts),
  ]);
}