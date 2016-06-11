import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore } from 'redux';  
import { applyMiddleware } from 'redux';

import appReducer from './reducers/appReducer';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(appReducer);

const root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> , 
root);  