export const FETCH_ACCOUNT = 'FETCH_ACCOUNT';
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';
export const FETCH_ACCOUNT_FAILED = 'FETCH_ACCOUNT_FAILED';

export function fetchAccount(data) {
  return { type: FETCH_ACCOUNT, value: data };
}

export function fetchAccountSuccess(data) {
  return { type: FETCH_ACCOUNT_SUCCESS, value: data };
}

export function fetchAccountFailed() {
  return { type: FETCH_ACCOUNT_FAILED };
}
