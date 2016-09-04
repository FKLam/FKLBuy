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
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var HWidth = Dimensions.get('window').width;
var TopListView = require('./FKLTopListView');

// 引入外部json数据
var TopMenu = require('../../LocalData/TopMenu.json');

var TopView = React.createClass({
    getInitialState() {
        return{
            currentPage: 0
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {/* 内容部分 */}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/* 页码部分 */}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },

    // scrollView内部的组件
    renderScrollItem() {
        // 组件数组
        var itemArr = [];
        // 颜色数组
        var dataArr = TopMenu.data;
        // 遍历创建组件
        for ( var index = 0; index < dataArr.length; index++ ) {
            itemArr.push(
                <TopListView
                    key={index}
                    dataArr={dataArr[index]}
                />
            )
        }
        return itemArr;
    },

    // 页码(指示器)
    renderIndicator() {
        // 指示器数组
        var indicatorArr = [];
        // 遍历创建数组
        for ( var index = 0; index < TopMenu.data.length; index++ ) {
            // 设置圆点的样式
            style = ( index === this.state.currentPage ) ? {color: 'orange'} : {color: 'gray'};
            indicatorArr.push(
                <Text key={index} style={[style, {fontSize: 18}]}>&bull;</Text>
            )
        }
        return indicatorArr;
    },

    // 当一帧滚动结束的时候调用
    onScrollAnimationEnd(e) {
        // 求出当前的页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / HWidth);
        // 更新状态机
        this.setState({
            currentPage: currentPage
        })
    }

});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    indicatorViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
// 输出组件
module.exports = TopView;
