import {
  FETCH_MANUFACTURERS_SUCCESS,
  FETCH_MANUFACTURERS_FAILED,
  FETCH_MANUFACTURER_DETAILS_SUCCESS,
  FETCH_MANUFACTURER_DETAILS_FAILED,
  SUBMIT_MANUFACTURER_SUCCESS,
  SUBMIT_MANUFACTURER_FAILED,
} from '../actions';

const initialState = {
  manufacturers: { data: [], count: 0 },
  manufacturerDetails: {},
  newSuccess: undefined,
};

export default function manufacturerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MANUFACTURERS_SUCCESS:
      return { ...state, manufacturers: action.value };
    case FETCH_MANUFACTURER_DETAILS_SUCCESS:
      return { ...state, manufacturerDetails: action.value };
    case SUBMIT_MANUFACTURER_SUCCESS:
      return { ...state, newSuccess: true };
    case SUBMIT_MANUFACTURER_FAILED:
      return { ...state, newSuccess: false };
    case FETCH_MANUFACTURERS_FAILED:
    case FETCH_MANUFACTURER_DETAILS_FAILED:
    default:
      return state;
  }
}
