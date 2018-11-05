import { 
  PRODUCT_MENU_OPEN,
  PRODUCT_MENU_CLOSE,
  REPORT_MENU_OPEN,
  REPORT_MENU_CLOSE,
} from '../actions';

const initialState = {
  productMenu: false,
};

export default function pathReducer(state = initialState, action) {
  switch (action.type) {
  case PRODUCT_MENU_OPEN:
    return { ...state, productMenu: true };
  case PRODUCT_MENU_CLOSE:
    return { ...state, productMenu: false };
  case REPORT_MENU_OPEN:
    return { ...state, reportMenu: true };
  case REPORT_MENU_CLOSE:
    return { ...state, reportMenu: false };
  default:
    return state;
  }
}
