import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import orderReducer from './order';

const rootReducer = combineReducers({
  form: formReducer,
  orderReducer
});

export default rootReducer;
