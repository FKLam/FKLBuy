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
} from 'react-native';

var Main = require('./FKLMain');

var Launch = React.createClass({
    render() {
        return (
            <Image source={{uri: 'launchimage'}} style={styles.launchImageStyle}></Image>
        );
    },

    // 复杂的操作,定时器\网络请求
    componentDidMount() {
        // 定时: 隔两秒切换到Main
        setTimeout(() => {
            // 页面的切换
            this.props.navigator.replace({
                component: Main
            });
        }, 1000);
    }
});

const styles = StyleSheet.create({
    launchImageStyle: {
        flex: 1
    }
});
// 输出组件
module.exports = Launch;
