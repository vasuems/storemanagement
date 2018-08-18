import { FETCH_NEW_PRODUCTS_SUCCESS } from '../../actions';

const initialState = {
  newProducts: []
}

export default function newProductReducer(state=initialState, action){
  switch(action.type){
    case FETCH_NEW_PRODUCTS_SUCCESS:
      return { ...state, newProducts: action.value }
    default:
      return state;
  }
}