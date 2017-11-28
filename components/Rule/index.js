import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    PanResponder,
    Animated,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import rules from '../../data/rules.js';

function newRuleText() {
    const i = Math.floor(Math.random() * rules.length);
    return rules[i].text;
}

export default class Rule extends Component {
    componentWillMount() {
        if(!this.reverse) {
            this.state.pan.addListener(c => this.state._value = c);
        }
    }
    componentWillUnmount() {
        this.state.pan.removeAllListeners();
    }
    constructor() {
        super();
        
        this.reverse = false;
        this.launch = false;
        this.right = false;
        this.state = {
            pan: new Animated.ValueXY(),
            _value: {x: 0, y: 0},
            text: newRuleText()
        };
        this.swipeConfig = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        this.panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, state) => true,
            onMoveShouldSetPanResponderCapture: (e, state) => true,
            onPanResponderGrant: (e, state) => {
                if(!this.reverse && !this.launch) {
                    this.state.pan.setOffset({x: this.state._value.x, y: this.state._value.y});
                    this.state.pan.setValue({x: 0, y: 0});
                }
            },
            onPanResponderMove: Animated.event([null, {dx: this.state.pan.x, dy: this.state.pan.y}]),
            onPanResponderRelease: (e, state) => {
                if(this._isValidSwipe(state)) {
                    this.right = state.vx > 0;
                    this.launch = true;
                    // Reset position after swipe
                    setTimeout(() => {
                        this.reverse = false;
                        this.launch = false;
                        this.right = false;
                        this.state.pan.setOffset({x: 0, y: 0});
                        this.state.pan.setValue({x: 0, y: 0});
                        this.setState(prevState => {
                            return {
                                pan: prevState.pan,
                                _value: {x: 0, y: 0},
                                text: newRuleText()
                            };
                        });
                    }, 200);
                }

                if(this.launch) {
                    Animated.spring(this.state.pan,{toValue: {x: (this.right ? 4000 : -4000), y: 0}}).start();
                    return;
                }

                if(!this.reverse) {
                    this.state.pan.flattenOffset();
                    this.reverse = true;
                } 
                
                Animated.spring(this.state.pan, {toValue: {x: 0, y: 0}}).start();

            }
        });
    }

    _isValidSwipe(state) {
        const {vx, dy} = state;
        const {velocityThreshold, directionalOffsetThreshold} = this.swipeConfig;
        return Math.abs(vx) > velocityThreshold && Math.abs(dy) < directionalOffsetThreshold;
    }   
    
    render() {
        return (
            <Animated.View {...this.panResponder.panHandlers} style={{left: this.state.pan.x, flexDirection: "row"}}>
                <TouchableOpacity style={styles.rule}>
                    <Text style={styles.body}>...{this.state.text}</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    rule: {
        flex: 1,
        padding: 20,
        backgroundColor: '#BF360C',
    },
    body: {
        color: '#e3e3dd',
        fontSize: 20
    }
});