import {
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILED,
} from '../actions';

const initialState = {
  data: { orderSummary: [], productSummary: [] },
  loaded: false,
  done: false,
  error: false,
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD_DATA_SUCCESS:
      return { ...state, data: action.value };
    case FETCH_DASHBOARD_DATA_FAILED:
      return { ...state, error: true };
    default:
      return state;
  }
}
