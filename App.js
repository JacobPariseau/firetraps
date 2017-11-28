/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Rule from './components/Rule/index.js';
import Category from './components/Category/index.js';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.layout}>
        <View style={styles.container}>
          <Rule />
          <Rule />
          <Rule />
          <Rule />
          <Rule />
        </View>
        <View style={styles.bar}>
          <Category enabled name="actions" />
          <Category enabled name="voices" />
          <Category disabled name="party" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#1e1f1c',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  bar: {
    flex: 0,
    height: 60,
    flexDirection: "row",
    alignItems: "center"
  }
});
