import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ReactRouter, { Link } from '../../utils/react-router';
import styles from './styles';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hi from About Screen.
        </Text>
        <Link to="/"><Text>Home</Text></Link>
      </View>
    );
  }
}
