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
    ScrollView,
    Platform,
} from 'react-native';

var MineHeaderView = require('./FKLMineHeaderView');
var MyCell = require('./FKLCommonMyCell');
var MineMiddleView = require('./FKLMineMiddleView');

var Mine = React.createClass({
    render() {
        return (
            <ScrollView
                style={styles.container}
                contentInset={{top: -200}}
                contentOffset={{y: 200}}
            >
                <MineHeaderView />
                <View style={{marginTop: 20}}>
                    <MyCell
                        leftIconName="collect"
                        leftTitle="我的订单"
                        rightTitle="查看全部订单"
                    />
                    <MineMiddleView style={{height: Platform.OS == 'ios' ? 200 : 200}} />
                </View>
                <View style={{marginTop: 20}}>
                    <MyCell
                        leftIconName="draft"
                        leftTitle="小码哥钱包"
                        rightTitle="账户余额:$100"
                    />
                    <MyCell
                        leftIconName="like"
                        leftTitle="抵用卷"
                        rightTitle="10张"
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <MyCell
                        leftIconName="card"
                        leftTitle="积分商城"
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <MyCell
                        leftIconName="new_friend"
                        leftTitle="今日推荐"
                        rightIconName="me_new"
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <MyCell
                        leftIconName="pay"
                        leftTitle="我要合作"
                        rightTitle="轻松开店,财产进宝"
                    />
                </View>
            </ScrollView>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8'
    }
});
// 输出组件
module.exports = Mine;
