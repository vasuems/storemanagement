import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import settingReducer from './setting';

const rootReducer = combineReducers({
  settingReducer,
  form: formReducer,
});

export default rootReducer;
