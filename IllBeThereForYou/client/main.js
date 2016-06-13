import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore } from 'redux';  
import { applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistory } from 'redux-simple-router';

import appReducer from './reducers/appReducer';
import App from './views/App';
import Login from './views/Login';
import Signup from './views/Signup';
import Feed from './views/Feed';
import { requireAuth } from './components/AuthComponent';

const reduxRouterMiddleware = syncHistory(hashHistory);
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxRouterMiddleware)(createStore);
let store = createStoreWithMiddleware(appReducer);

const root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" >
        <IndexRoute component={Login} />
        <Route path="signup" component={Signup} />
        <Route path="feed" component={ requireAuth(Feed) } />
      </Route>
    </Router>
  </Provider>, 
root);  