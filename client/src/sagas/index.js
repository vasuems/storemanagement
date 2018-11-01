import { call, all } from 'redux-saga/effects';
import { fetchOrders } from './order';
import { fetchProductCategories, fetchProducts } from './product';

export default function* rootSaga() {
  yield all([
    call(fetchOrders), 
    call(fetchProductCategories),
    call(fetchProducts),
  ]);
}
