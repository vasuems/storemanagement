export const FETCH_ACCOUNT_SETTINGS = 'FETCH_ACCOUNT_SETTINGS';
export const FETCH_ACCOUNT_SETTINGS_SUCCESS = 'FETCH_ACCOUNT_SETTINGS_SUCCESS';
export const FETCH_ACCOUNT_SETTINGS_FAILED = 'FETCH_ACCOUNT_SETTINGS_FAILED';

export function fetchAccountSettings() {
  return { type: FETCH_ACCOUNT_SETTINGS };
}

export function fetchAccountSettingsSuccess(data) {
  return { type: FETCH_ACCOUNT_SETTINGS_SUCCESS, value: data };
}

export function fetchAccountSettingsFailed() {
  return { type: FETCH_ACCOUNT_SETTINGS_FAILED };
}
