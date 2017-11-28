import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    box: {
        flex: 0,
        width: 60,
        height: 60,
        marginBottom: 10,
        backgroundColor: '#EF6C00'
    },
});