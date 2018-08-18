import { call, put } from 'redux-saga/effects';
import { fetchNewProductsSuccess, fetchNewProductsFailed,
  fetchFeaturedProductsSuccess, fetchFeaturedProductsFailed } from '../actions';
import { newProducts, featuredProducts } from '../apis/mocks/responses';

export function* fetchNewProducts(action) {
   try {
      yield put(fetchNewProductsSuccess(newProducts))
   } catch (error) {
      yield put(fetchNewProductsFailed)
   }
}

export function* fetchFeaturedProducts(action) {
  try {
     yield put(fetchFeaturedProductsSuccess(featuredProducts))
  } catch (error) {
     yield put(fetchFeaturedProductsFailed)
  }
}