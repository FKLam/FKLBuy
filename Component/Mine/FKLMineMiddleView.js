/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var MiddleData = require('./MiddleData.json');

var InnerView = React.createClass({
    getDefaultProps() {
        return{
            iconName: '',
            title: ''
        }
    },
    render() {
        return(
            <View style={{alignItems: 'center'}}>
                <Image source={{uri: this.props.iconName}} style={{width: 30, height: 20}} />
                <Text style={{fontSize: 10, color: 'gray', marginTop: 2}}>{this.props.title}</Text>
            </View>
        );
    }
});

var MineMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },

    renderAllItem() {
        var itemArr = [];
        for (var index = 0; index < MiddleData.length; index++ ) {
            var data = MiddleData[index];
            itemArr.push(
                <InnerView key={index} iconName={data.iconName} title={data.title} />
            );
        }
        return itemArr;
    }
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        height: 50
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
// 输出组件
module.exports = MineMiddleView;
