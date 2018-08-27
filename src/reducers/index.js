import { combineReducers } from 'redux';
import productReducer from './products/productReducer';
import featuredProductReducer from './products/featuredProductReducer';
import newProductReducer from './products/newProductReducer';
import productDetailReducer from './products/productDetailReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
  productReducer,
  featuredProductReducer,
  newProductReducer,
  productDetailReducer,
  cartReducer
});

export default rootReducer;
