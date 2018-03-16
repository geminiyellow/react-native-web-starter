import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ReactRouter, { Router, Route, Switch } from './utils/react-router';

import { Home, route as HomeRoute } from './screens/Home';
import { About, route as AboutRoute } from './screens/About';

const routes = [HomeRoute, AboutRoute];

export default class Root extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            {
              routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))
            }
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
