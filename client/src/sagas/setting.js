import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchStoreSettingsSuccess, fetchStoreSettingsFailed } from '../actions';
import { settings } from '../apis/mocks/responses';
import config from '../config';

export function* fetchStoreSettings(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/asdfasdfasdfasd`,
      headers: {
        'authorization': localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchStoreSettingsSuccess(res.data));
  } catch (error) {
    yield put(fetchStoreSettingsFailed());
  }
}
