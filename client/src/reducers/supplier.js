import {
  FETCH_SUPPLIERS_SUCCESS,
  FETCH_SUPPLIERS_FAILED,
  FETCH_SUPPLIER_DETAILS_SUCCESS,
  FETCH_SUPPLIER_DETAILS_FAILED,
  SUBMIT_SUPPLIER_SUCCESS,
  SUBMIT_SUPPLIER_FAILED,
} from '../actions';

const initialState = {
  suppliers: { data: [], count: 0 },
  supplierDetails: {},
  newSuccess: undefined,
};

export default function supplierReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUPPLIERS_SUCCESS:
      return { ...state, suppliers: action.value };
    case FETCH_SUPPLIER_DETAILS_SUCCESS:
      return { ...state, supplierDetails: action.value };
    case SUBMIT_SUPPLIER_SUCCESS:
      return { ...state, newSuccess: true };
    case SUBMIT_SUPPLIER_FAILED:
      return { ...state, newSuccess: false };
    case FETCH_SUPPLIERS_FAILED:
    case FETCH_SUPPLIER_DETAILS_FAILED:
    default:
      return state;
  }
}
