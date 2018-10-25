export const FETCH_DASHBOARD_DATA = 'FETCH_DASHBOARD_DATA';
export const FETCH_DASHBOARD_DATA_SUCCESS = 'FETCH_DASHBOARD_DATA_SUCCESS';
export const FETCH_DASHBOARD_DATA_FAILED = 'FETCH_DASHBOARD_DATA_FAILED';

export function fetchDashboardData() {
  return { type: FETCH_DASHBOARD_DATA };
}

export function fetchDashboardDataSuccess(data) {
  return { type: FETCH_DASHBOARD_DATA_SUCCESS, value: data };
}

export function fetchDashboardDataFailed() {
  return { type: FETCH_DASHBOARD_DATA_FAILED };
}
