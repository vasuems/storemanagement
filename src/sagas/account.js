import { call, put } from 'redux-saga/effects';
import { fetchAccountSettingsSuccess, fetchAccountSettingsFailed } from '../actions';
import { cart } from '../apis/mocks/responses';

export function* fetchAccountSettings(action) {
  try {
    yield put(fetchAccountSettingsSuccess(cart));
  } catch (error) {
    yield put(fetchAccountSettingsFailed());
  }
}
