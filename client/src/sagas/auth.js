import { call, put } from 'redux-saga/effects';
import { authSuccess, authFailed } from '../actions';
import axios from 'axios';

export function* submitLoginData(action) {
  try {
    const { username, password } = action.value;
    console.log(username, password);
    const res = yield axios.post('http://localhost:8080/auth', {
      username,
      password,
      grantType: 'password',
      scope: 'profile',
    });
    console.log(res);
    yield put(authSuccess());
  } catch (error) {
    console.log('here2');
    console.log(error);
    yield put(authFailed());
  }
}
