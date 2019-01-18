import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchDashboardDataSuccess,
  fetchDashboardDataFailed,
  clearToken,
} from '../actions';
import config from '../config';

export function* fetchDashboardData(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${action.value}/summary`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchDashboardDataSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(fetchDashboardDataFailed());
    }
  }
}
