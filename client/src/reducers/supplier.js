import {
  FETCH_SUPPLIERS_SUCCESS,
  FETCH_SUPPLIERS_FAILED,
} from '../actions';

const initialState = {
  suppliers: [],
  supplierDetails: {},
};

export default function supplierReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_SUPPLIERS_SUCCESS:
    return { ...state, suppliers: action.value };
  case FETCH_SUPPLIERS_FAILED:
  default:
    return state;
  }
}
