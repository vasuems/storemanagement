import { call, put } from 'redux-saga/effects';
import { fetchProductCategoriesSuccess, fetchProductCategoriesFailed, fetchProductsSuccess, fetchProductsFailed } from '../actions';
import { categories, products } from '../apis/mocks/responses';

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
