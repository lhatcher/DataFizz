import { combineReducers } from 'redux';
import userReducer from './userReducer';
import { routeReducer } from 'redux-simple-router';

const appReducer = combineReducers({
  routing: routeReducer,
  user: userReducer,
});

export default appReducer;