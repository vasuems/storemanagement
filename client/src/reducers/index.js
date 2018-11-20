import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import orderReducer from './order';
import customerReducer from './customer';
import dashboardReducer from './dashboard';
import productReducer from './product';
import pathReducer from './path';
import reportReducer from './report';
import settingReducer from './setting';
import authReducer from './auth';
import supplierReducer from './supplier';
import manufacturerReducer from './manufacturer';
import publicReducer from './public';
import accountReducer from './account';

const rootReducer = combineReducers({
  form: formReducer,
  orderReducer,
  customerReducer,
  dashboardReducer,
  productReducer,
  pathReducer,
  reportReducer,
  settingReducer,
  authReducer,
  supplierReducer,
  manufacturerReducer,
  publicReducer,
  accountReducer,
});

export default rootReducer;
