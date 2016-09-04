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

var Dimensions = require('Dimensions');
var HWidth= Dimensions.get('window').width;
var VHeight = Dimensions.get('window').height;

// 导入外部的json数据
var Home_D4 = require('../../LocalData/XMG_Home_D4.json');

// 导入外部的组件类
var CommonView = require('./FKLMiddleCommonView');

var BottomView = React.createClass({
    getDefaultProps() {
        return{
            popTopHome: null
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {/* 上部分 */}
                <View style={styles.topViewStyle}>
                    {this.renderTopItem()}
                </View>
                {/* 下部分 */}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },

    // 上部分的组件
    renderTopItem() {
        // return(
        //     <CommonView
        //         title="最高立减25"
        //         subTitle="宝宝"
        //         rightImage={this.dealWithImgUrl(itemData.imageurl)}
        //         titleColor="orange"
        //     />
        // );
    },

    // 下部分的所有子组件
    renderBottomItem() {
        // 组件数组
        var itemArr = [];
        // 拿到对应的数据
        var dataArr = Home_D4.data;
        // 遍历
        for ( var index = 0; index < dataArr.length; index++ ) {
            // 取出单独的数据
            var itemData = dataArr[index];
            // 创建组件,装入数组
            itemArr.push(
                <CommonView
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightImage={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    callBackClickCell={(itemData) => this.popToTopView(itemData)}
                    tpurl={itemData.tpurl}
                    key={index}
                />
            );
        }
        // 返回组件竖直
        return itemArr;
    },

    // 处理右边的图片
    dealWithImgUrl(imgUrl) {
        if ( imgUrl.search('w.h') == -1 )
            return imgUrl;
        else {
            return imgUrl.replace('w.h', '120.90');
        }
    },

    // 继续往父级界面传递数据
    popToTopView(data) {
        // 继续执行回调函数
        this.props.popTopHome(data);
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    topViewStyle: {},
    bottomViewStyle: {
        // 设置主轴的方向
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
// 输出组件
module.exports = BottomView;
