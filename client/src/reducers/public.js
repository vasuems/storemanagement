import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILED,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILED,
} from '../actions';

const initialState = {
  storeSettings: {},
  currencies: [],
  countries: [],
};

export default function publicReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_COUNTRIES_SUCCESS:
    return { ...state, currencies: action.value };
  case FETCH_CURRENCIES_SUCCESS:
    return { ...state, countries: action.value };
  case FETCH_COUNTRIES_FAILED:
  case FETCH_CURRENCIES_FAILED:
  default:
    return state;
  }
}
