import { call, put } from 'redux-saga/effects';
import {
  fetchAccountSettingsSuccess,
  fetchAccountSettingsFailed,
} from '../actions';
import { accountSettings, orders } from '../apis/mocks/responses';

export function* fetchAccountSettings(action) {
  try {
    yield put(fetchAccountSettingsSuccess({ orders, accountSettings }));
  } catch (error) {
    yield put(fetchAccountSettingsFailed());
  }
}
