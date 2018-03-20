import creator from 'redux-api-actions';
import Root from './container';
import { endpoint } from './constants';

export default creator({
  namespace: 'about',
  state: { loading: false, count: 0 },
  component: Root,
  actions: {
    count: {
      success: state => state.update('count', count => count + 1),
    },
    fetch: {
      endpoint,
      before: count => ({ endpoint: `${endpoint}/${count}` }),
      success: (state, { payload: { count } }) => state.update('count', v => count),
    }
  },
});
