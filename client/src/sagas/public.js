import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchCountriesSuccess,
  fetchCountriesFailed,
  fetchCurrenciesSuccess,
  fetchCurrenciesFailed,
  authFailed,
} from '../actions';
import config from '../config';

export function* fetchCountries(action) {
  try {
    const res = yield axios.get(`${config.apiDomain}/countries`, {
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchCountriesSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchCountriesFailed());
    }
  }
}

export function* fetchCurrencies(action) {
  try {
    const res = yield axios.get(`${config.apiDomain}/currencies`, {
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchCurrenciesSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchCurrenciesFailed());
    }
  }
}
