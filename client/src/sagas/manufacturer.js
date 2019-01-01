import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchManufacturersSuccess,
  fetchManufacturersFailed,
  fetchManufacturerDetailsSuccess,
  fetchManufacturerDetailsFailed,
  clearToken,
  submitManufacturerSuccess,
  submitManufacturerFailed,
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
    const { storeId, manufacturerId } = action.value;
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${storeId}/manufacturers/${manufacturerId}`,
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

export function* addManufacturer(action) {
  try {
    const { storeId } = action.value;
    const res = yield axios({
      method: 'post',
      url: `${config.apiDomain}/stores/${storeId}/manufacturers`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
      data: action.value,
    });

    yield put(submitManufacturerSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(clearToken());
    } else {
      yield put(submitManufacturerFailed());
    }
  }
}
