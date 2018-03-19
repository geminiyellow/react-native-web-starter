import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import ReactRouter, { Link } from '../../utils/react-router';
import styles from './styles';

export default class About extends Component {
  render() {
    const { about, actions: { count: handlePress } } = this.props;
    const { count } = about ? about.toJS() : {};

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hi from About Screen. {count}
        </Text>
        <Link to="/"><Text>Home</Text></Link>
        <Button title={'count'} onPress={handlePress} />
      </View>
    );
  }
}
