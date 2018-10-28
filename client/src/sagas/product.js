import { call, put } from 'redux-saga/effects';
import { fetchProductCategoriesSuccess, fetchProductCategoriesFailed } from '../actions';
import { categories } from '../apis/mocks/responses';

export function* fetchProductCategories(action) {
  try {
    yield put(fetchProductCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchProductCategoriesFailed());
  }
}
