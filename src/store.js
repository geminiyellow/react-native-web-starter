import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { isDev, isWeb } from './utils/common';

import { reducers as about } from './screens/About/model';

const initialState = {};
const composeEnhancers = (isWeb && isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  combineReducers({ about }), // reducers
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
