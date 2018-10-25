import { FETCH_SITE_SETTINGS_SUCCESS } from '../actions';

const initialState = {
  settings: {},
};

export default function settingReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_SITE_SETTINGS_SUCCESS:
    return { ...state, settings: action.value };
  default:
    return state;
  }
}
