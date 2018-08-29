import { FETCH_ACCOUNT_SETTINGS_SUCCESS } from '../../actions';

const initialState = {
  settings: {}
};

export default function acctSettingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNT_SETTINGS_SUCCESS:
      return { ...state, settings: action.value };
    default:
      return state;
  }
}
