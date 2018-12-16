import { call, put } from 'redux-saga/effects';
import {
  fetchDashboardDataSuccess,
  fetchDashboardDataFailed,
  clearToken,
} from '../actions';
import { dashboard } from '../apis/mocks/responses';

export function* fetchDashboardData(action) {
  try {
    yield put(fetchDashboardDataSuccess(dashboard));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(fetchDashboardDataFailed());
    }
  }
}
