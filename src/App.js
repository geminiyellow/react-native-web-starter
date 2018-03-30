import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Drawer from './screens/Drawer';

import store from './store';

import { Router } from './utils/react-router';

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Drawer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
