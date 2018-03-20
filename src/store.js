import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';

import { isDev, isWeb } from './utils/common';

import { Reducer as about } from './screens/About';

const middleware = [thunk, apiMiddleware, logger];

const initialState = {};
const composeEnhancers = (isWeb && isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  combineReducers({ ...about }), // reducers
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
