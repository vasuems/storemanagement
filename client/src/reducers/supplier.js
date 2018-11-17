import {
  FETCH_SUPPLIERS_SUCCESS,
  FETCH_SUPPLIERS_FAILED,
  FETCH_SUPPLIER_DETAILS_SUCCESS,
  FETCH_SUPPLIER_DETAILS_FAILED,
} from '../actions';

const initialState = {
  suppliers: [],
  supplierDetails: {},
};

export default function supplierReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUPPLIERS_SUCCESS:
      return { ...state, suppliers: action.value };
    case FETCH_SUPPLIER_DETAILS_SUCCESS:
      return { ...state, supplierDetails: action.value };
    case FETCH_SUPPLIERS_FAILED:
    case FETCH_SUPPLIER_DETAILS_FAILED:
    default:
      return state;
  }
}
