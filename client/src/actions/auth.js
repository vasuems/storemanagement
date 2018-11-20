export const SUBMIT_LOGIN_DATA = 'SUBMIT_LOGIN_DATA';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';

export function submitLoginData(data) {
  return { type: SUBMIT_LOGIN_DATA, value: data };
}

export function authSuccess(data) {
  return { type: AUTH_SUCCESS, value: data };
}

export function authFailed() {
  console.log('here')
  return { type: AUTH_FAILED };
}
