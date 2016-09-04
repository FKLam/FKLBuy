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
    TouchableOpacity,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var hWidth = Dimensions.get('window').width;
var vHeight = Dimensions.get('window').height;

// 引入外部的组件类
var CommonView = require('./FKLMiddleCommonView');

// 引入外部数据
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

var HomeMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/* 左边 */}
                {this.renderLeftView()}
                {/* 右边 */}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },

    // 左边的View
    renderLeftView() {
        // 拿到对应的数据
        var data = TopMiddleData.dataLeft[0];

        return(
            <TouchableOpacity activeOpacity={0.5} onPress={() => {alert('点击了')}}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: data.img1}} style={styles.leftImageStyle} />
                    <Image source={{uri: data.img2}} style={styles.leftImageStyle} />
                    <Text style={{color: 'gray'}}>{data.title}</Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                        <Text style={{color: 'blue', marginRight: 5}}>{data.price}</Text>
                        <Text style={{color: 'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    // 右边的Views
    renderRightView() {
        // 组件数组
        var itemArr = [];
        // 取出具体的数据
        var rightData = TopMiddleData.dataRight;
        // 遍历
        for ( var index = 0; index < rightData.length; index++ ) {
            var data = rightData[index];
            itemArr.push(
                <CommonView
                    title={data.title}
                    subTitle={data.subTitle}
                    rightImage={data.rightImage}
                    titleColor={data.titleColor}
                    key={index}
                />
            );
        }
        // 返回
        return itemArr;
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row'
    },
    leftImageStyle: {
        width: 120,
        height: 30,
        // 内容模式
        resizeMode: 'contain'
    },
    leftViewStyle: {
        width: hWidth * 0.5,
        height: 119,
        backgroundColor: 'white',
        marginRight: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
// 输出组件
module.exports = HomeMiddleView;
