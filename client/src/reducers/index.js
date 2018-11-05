import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import orderReducer from './order';
import customerReducer from './customer';
import dashboardReducer from './dashboard';
import productReducer from './product';
import pathReducer from './path';
import reportReducer from './report';

const rootReducer = combineReducers({
  form: formReducer,
  orderReducer,
  customerReducer,
  dashboardReducer,
  productReducer,
  pathReducer,
  reportReducer,
});

export default rootReducer;
