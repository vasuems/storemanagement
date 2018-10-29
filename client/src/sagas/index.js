import { call, all } from 'redux-saga/effects';
import { fetchOrders } from './order';
import { fetchProductCategories } from './product';

export default function* rootSaga() {
  yield all([
    call(fetchOrders), 
    call(fetchProductCategories),
  ]);
}
