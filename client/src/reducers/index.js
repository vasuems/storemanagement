import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import orderReducer from './order';
import customerReducer from './customer';

const rootReducer = combineReducers({
  form: formReducer,
  orderReducer,
  customerReducer,
});

export default rootReducer;
