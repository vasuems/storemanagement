
export const FETCH_SITE_SETTINGS = 'FETCH_SITE_SETTINGS';
export const FETCH_SITE_SETTINGS_SUCCESS = 'FETCH_SITE_SETTINGS_SUCCESS';
export const FETCH_SITE_SETTINGS_FAILED = 'FETCH_SITE_SETTINGS_FAILED';

export function fetchSiteSettings() {
  return { type: FETCH_SITE_SETTINGS };
}

export function fetchSiteSettingsSuccess(data) {
  return { type: FETCH_SITE_SETTINGS_SUCCESS, value: data };
}

export function fetchSiteSettingsFailed() {
  return { type: FETCH_SITE_SETTINGS_FAILED };
}