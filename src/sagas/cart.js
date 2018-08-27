import { call, put } from 'redux-saga/effects';
import { fetchCartSuccess, fetchCartFailed } from '../actions';
import { cart } from '../apis/mocks/responses';

export function* fetchCart(action) {
  try {
    yield put(fetchCartSuccess(cart));
  } catch (error) {
    yield put(fetchCartFailed());
  }
}
