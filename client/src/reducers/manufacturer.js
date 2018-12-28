import {
  FETCH_MANUFACTURERS_SUCCESS,
  FETCH_MANUFACTURERS_FAILED,
  FETCH_MANUFACTURER_DETAILS_SUCCESS,
  FETCH_MANUFACTURER_DETAILS_FAILED,
} from '../actions';

const initialState = {
  manufacturers: { data: [], total: 0 },
  manufacturerDetails: {},
};

export default function manufacturerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MANUFACTURERS_SUCCESS:
      return { ...state, manufacturers: action.value };
    case FETCH_MANUFACTURER_DETAILS_SUCCESS:
      return { ...state, manufacturerDetails: action.value };
    case FETCH_MANUFACTURERS_FAILED:
    case FETCH_MANUFACTURER_DETAILS_FAILED:
    default:
      return state;
  }
}
