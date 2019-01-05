import {
  FETCH_MANUFACTURERS_SUCCESS,
  FETCH_MANUFACTURERS_FAILED,
  FETCH_MANUFACTURER_DETAILS_SUCCESS,
  FETCH_MANUFACTURER_DETAILS_FAILED,
  SUBMIT_MANUFACTURER_SUCCESS,
  SUBMIT_MANUFACTURER_FAILED,
  CLEAR_MANUFACTURER_DETAILS,
} from '../actions';

const initialState = {
  manufacturers: { data: [], count: 0 },
  manufacturerDetails: {},
  done: false,
  error: false,
};

export default function manufacturerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MANUFACTURERS_SUCCESS:
      return { ...state, manufacturers: action.value, done: true };
    case FETCH_MANUFACTURER_DETAILS_SUCCESS:
      return { ...state, manufacturerDetails: action.value, done: true };
    case SUBMIT_MANUFACTURER_SUCCESS:
      return { ...state, done: true };
    case SUBMIT_MANUFACTURER_FAILED:
    case FETCH_MANUFACTURERS_FAILED:
    case FETCH_MANUFACTURER_DETAILS_FAILED:
      return { ...state, error: true };
    case CLEAR_MANUFACTURER_DETAILS:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
