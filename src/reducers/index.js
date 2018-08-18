import { combineReducers } from 'redux';
import popularProductReducer from './products/PopularProductReducer';
import newProductReducer from './products/NewProductReducer';
import productDetailReducer from './products/ProductDetailReducer';
import cartReducer from './cart/CartReducer';

const rootReducer = combineReducers({
  popularProductReducer,
  newProductReducer,
  productDetailReducer,
  cartReducer,
});

export default rootReducer;
