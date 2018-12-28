import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchManufacturersSuccess,
  fetchManufacturersFailed,
  fetchManufacturerDetailsSuccess,
  fetchManufacturerDetailsFailed,
  clearToken,
} from '../actions';
import config from '../config';

export function* fetchManufacturers(action) {
  try {
    const { storeId, pageNo, pageSize } = action.value;
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${storeId}/manufacturers?page=${pageNo}&size=${pageSize}`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchManufacturersSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
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
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(fetchManufacturerDetailsFailed());
    }
  }
}
