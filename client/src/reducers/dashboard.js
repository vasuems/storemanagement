import { FETCH_DASHBOARD_DATA_SUCCESS } from '../actions';

const initialState = {
  data: {},
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_DASHBOARD_DATA_SUCCESS:
    return { ...state, data: action.value };
  default:
    return state;
  }
}
