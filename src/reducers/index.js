import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productReducer from './products/product';
import featuredProductReducer from './products/featuredProduct';
import newProductReducer from './products/newProduct';
import productDetailReducer from './products/productDetail';
import cartReducer from './cart/cart';
import settingReducer from './admin/setting';
import acctSettingReducer from './account/setting';

const rootReducer = combineReducers({
  productReducer,
  featuredProductReducer,
  newProductReducer,
  productDetailReducer,
  cartReducer,
  settingReducer,
  acctSettingReducer,
  form: formReducer,
});

export default rootReducer;
