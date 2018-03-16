import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ReactRouter, { Link } from '../../utils/react-router';
import { instructions } from './constants'
import styles from './styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Link to="/about">
          <Text style={styles.instructions}>About</Text>
        </Link>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}
