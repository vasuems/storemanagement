import { call, put } from 'redux-saga/effects';
import { fetchDashboardDataSuccess, fetchDashboardDataFailed } from '../actions';
import { dashboard } from '../apis/mocks/responses';

export function* fetchDashboardData(action) {
  try {
    yield put(fetchDashboardDataSuccess(dashboard));
  } catch (error) {
    yield put(fetchDashboardDataFailed());
  }
}
