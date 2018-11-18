import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchManufacturersSuccess,
  fetchManufacturersFailed,
  fetchManufacturerDetailsSuccess,
  fetchManufacturerDetailsFailed,
  authFailed,
} from '../actions';
import config from '../config';
import { manufacturers, manufacturerDetails } from '../apis/mocks/responses';

export function* fetchManufacturers(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${action.value}/manufacturers`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchManufacturersSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchManufacturersFailed());
    }
  }
}

export function* fetchManufacturerDetails(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${action.value}/manufactures`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchManufacturerDetailsSuccess(res.data));
  } catch (error) {
    yield put(fetchManufacturerDetailsFailed());
  }
}
