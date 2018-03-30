import React from 'react';
import { Text, View } from 'react-native';

import { isWeb } from '../../utils/common';
import { Link } from '../../utils/react-router';
import { route as AboutRoute } from '../About';
import { route as HomeRoute } from '../Home';

import styles from './styles';

const routes = [HomeRoute, AboutRoute];

export default class Content extends React.Component {
  render() {
    const { onPress } = this.props;

    const defaultLinkProps = {};
    defaultLinkProps[isWeb ? 'onClick' : 'onPress'] = onPress;

    return (
      <View style={styles.container}>
        <Text style={styles.containerTitle}>
          Title
        </Text>
        <View style={styles.categoryList}>
          {
            routes.map(({ path, exact, sidebar: Sidebar }, i) => (
              <Link exact key={i} to={path} {...defaultLinkProps}>
                <View style={styles.row}><Sidebar /></View>
              </Link>
            ))
          }
        </View>
      </View>
    );
  }
}
