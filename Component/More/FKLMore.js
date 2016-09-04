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
    TouchableOpacity,
    Platform,
    ScrollView,
} from 'react-native';

var CommonCell = require('./FKLCommonCell');

var HWidth = Platform.OS == 'ios' ? 28 : 24;

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/* 导航条 */}
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop: 20}}>
                        <CommonCell
                            title="扫一扫"
                        />
                    </View>
                    <View style={{marginTop: 20}}>
                        <CommonCell
                            title="省流量模式"
                            isSwitch={true}
                        />
                        <CommonCell
                            title="清除缓存"
                            rightTitle="142.9MB"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },
    // 导航条
    renderNavBar() {
        return(
            <View style={styles.navOutViewStyle}>
                <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold', marginTop: 20}}>更多</Text>
                <TouchableOpacity activeOpacity={0.5} style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navImageStyle}></Image>
                </TouchableOpacity>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    navImageStyle: {
        width: Platform.OS == 'ios' ? 28 : 24,
        height: Platform.OS == 'ios' ? 28 : 24,
    },
    navOutViewStyle: {
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255, 96, 0, 1.0)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightViewStyle: {
        position: 'absolute',
        right: 10,
        bottom: (44 - HWidth) / 2.0
    }
});
// 输出组件
module.exports = More;
