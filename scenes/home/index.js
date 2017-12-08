import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    Button,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';

import ImageButton from '../../components/ImageButton/image-button.js';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render () {
        const { navigate } = this.props.navigation;

        return (
            <View 
                style={styles.layout}>
                <View 
                    style={styles.container}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain"
                        source={require('../../res/homeheader.png')} 
                    />
                </View>
                <View 
                    style={styles.container}>
                    <TouchableWithoutFeedback 
                        onPress={() => navigate('Game')}> 
                        <View style={styles.button}>
                            <Text style={styles.body}>PLAY</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#4e342e'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative'
    },
    image: {
        flex: 1,
        alignSelf: "stretch",
        width: null,
        height: null
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: 50,
        width: 150,
        backgroundColor: '#FFB74D',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 5,
        borderRadius: 6,
        elevation: 3
    },
    body: {
        color: '#453525',
        fontSize: 22,
        fontFamily: 'ComicRelief',
        textAlign: 'center'
    }
});