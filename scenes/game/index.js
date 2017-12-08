import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import Rule from '../../components/Rule/index.js';

export default class GameScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render () {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.layout}>
                <View style={styles.container}>
                    <Rule />
                    <Rule />
                    <Rule />
                    <Rule />
                    <Rule />
                    <Rule />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
      flex: 1,
      backgroundColor: '#4e342e',
      paddingVertical: 5,
      paddingHorizontal: 10
    },
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100%',
    }
  });