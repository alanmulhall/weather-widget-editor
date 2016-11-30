import {combineReducers} from 'redux';
import widgets from './widgets';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  widgets,
  form: formReducer
});

export default rootReducer;
