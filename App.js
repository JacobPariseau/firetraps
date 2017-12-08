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

import {
  StackNavigator
} from 'react-navigation';

import HomeScreen from './scenes/home/index.js';
import GameScreen from './scenes/game/index.js';

export default Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: GameScreen }
});


