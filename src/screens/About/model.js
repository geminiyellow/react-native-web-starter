import { createAction } from 'redux-actions';
import { List, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import { ABOUT_COUNT } from './constants';

const state = fromJS({ count: 1 });

// ******** ACTIONS ********
const count = createAction(ABOUT_COUNT);
export const actions = { count };

// ******** REDUCERS ********
export const reducers = handleActions({
  [ABOUT_COUNT]: state => state.update('count', count => count + 1),
}, state);
