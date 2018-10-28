import { call, all } from 'redux-saga/effects';
import { fetchOrders } from './order';

export default function* rootSaga() {
  yield all([call(fetchOrders)]);
}
