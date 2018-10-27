import { FETCH_CUSTOMERS_SUCCESS } from '../actions';

const initialState = {
  customers: [],
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_CUSTOMERS_SUCCESS:
    return { ...state, customers: action.value };
  default:
    return state;
  }
}
