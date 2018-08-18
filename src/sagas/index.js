import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { FETCH_NEW_PRODUCTS } from '../actions';
import { fetchNewProducts } from './product';

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_NEW_PRODUCTS, fetchNewProducts)
  ]);
}