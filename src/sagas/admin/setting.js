import { call, put } from 'redux-saga/effects';
import {
  fetchSiteSettingsSuccess,
  fetchSiteSettingsFailed,
} from '../../actions';
import { settings } from '../../apis/mocks/responses';

export function* fetchSiteSettings(action) {
  try {
    yield put(fetchSiteSettingsSuccess(settings));
  } catch (error) {
    yield put(fetchSiteSettingsFailed());
  }
}
