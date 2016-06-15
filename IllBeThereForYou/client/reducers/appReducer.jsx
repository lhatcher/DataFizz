import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import userInfo from './loginReducer';
import posts from './postReducer';

const appReducer = combineReducers({
  routing: routeReducer,
  user: userInfo,
  posts: posts,
});

export default appReducer;