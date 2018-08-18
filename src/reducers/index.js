import { combineReducers } from 'redux';
import featuredProductReducer from './products/featuredProductReducer';
import newProductReducer from './products/newProductReducer';
import productDetailReducer from './products/ProductDetailReducer';
import cartReducer from './cart/CartReducer';

const rootReducer = combineReducers({
  featuredProductReducer,
  newProductReducer,
  productDetailReducer,
  cartReducer,
});

export default rootReducer;
