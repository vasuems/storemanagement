import { call, put } from 'redux-saga/effects';
import {
  fetchAccountSettingsSuccess,
  fetchAccountSettingsFailed
} from '../actions';
import { accountSettings } from '../apis/mocks/responses';

export function* fetchAccountSettings(action) {
  try {
    yield put(fetchAccountSettingsSuccess(accountSettings));
  } catch (error) {
    yield put(fetchAccountSettingsFailed());
  }
}
