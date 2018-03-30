import React from 'react';
import { Button } from 'react-native';
import Drawer from 'react-native-drawer';

import { Route, Switch } from '../../utils/react-router';
import { route as AboutRoute } from '../About';
import { route as HomeRoute } from '../Home';
import { defaultProps } from './constants';

import Content from './content';

const routes = [HomeRoute, AboutRoute];

class Container extends React.Component {
  render() {
    return (
      <Drawer
        ref={el => this.drawer = el}
        content={<Content onPress={() => this.drawer.close()} />}
        {...defaultProps}
      >
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
          <Button onPress={() => this.drawer.open()} title="Header" />
        </React.Fragment>
      </Drawer>
    );
  }
}

export default Container;
