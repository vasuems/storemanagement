import { call, put } from 'redux-saga/effects';
import { authSuccess, authFailed } from '../actions';
import axios from 'axios';

export function* submitLoginData(action) {
  try {
    const { username, password } = action.value;
    const res = yield axios.post('http://localhost:8080/auth', {
      username,
      password,
      grantType: 'password',
      scope: 'profile',
    });

    yield put(authSuccess(res.data));
  } catch (error) {
    yield put(authFailed());
  }
}
