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
    ScrollView,
    TouchableOpacity
} from 'react-native';

// 引入外部组件类
var CommonCell = require('./FKLBottomCommonCell');

// 引入外部的json数据
var Home_D5 = require('../../LocalData/XMG_Home_D5.json');

var ShopCenter = React.createClass({
    getDefaultProps() {
        return{
            popToHomeView: null
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {/* 上部分 */}
                <CommonCell
                    leftIcon="gw"
                    leftTitle="购物中心"
                    rightTitle={Home_D5.tips}
                />
                {/* 下部分 */}
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    },

    // 返回下部分所有的item
    renderAllItem() {
        // 定义组件数组
        var itemArr = [];
        // 取出数据
        var shopData = Home_D5.data;
        // 遍历
        for ( var index = 0; index < shopData.length; index++ ) {
            // 取出单个数据
            var data = shopData[index];
            // 创建组件装入数组
            itemArr.push(
                <ShopCenterItem
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailUrl={data.detailurl}
                    popToShopCenter={(url) => this.popToHome(url)}
                    key={index}
                />
            );
        }
        // 返回
        return itemArr;
    },

    popToHome(url) {
        if ( this.props.popToHomeView == null ) return;
        // 执行回调函数
        this.props.popToHomeView(url);
    }
});

// 每一个商场
var ShopCenterItem = React.createClass({
    getDefaultProps() {
        return{
            shopImage: '',
            shopSale: '',
            shopName: '',
            detailUrl: '',
            popToShopCenter: null
        }
    },

    render() {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.clickItem(this.props.detailUrl)}>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri: this.props.shopImage}} style={styles.imageStyle} />
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    },

    clickItem(url) {
        // 判断
        if( this.props.detailUrl == null ) return;
        // 执行回调函数
        this.props.popToShopCenter(url);
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    imageStyle: {
        width: 120,
        height: 100,
        borderRadius: 8
    },
    scrollViewStyle: {
        backgroundColor: 'white',
        padding: 10
    },
    itemViewStyle: {
        margin: 8
    },
    shopSaleStyle: {
        position: 'absolute',
        left: 0,
        bottom: 30,
        backgroundColor: 'yellow',
        color: 'orange',
        padding: 2
    },
    shopNameStyle: {
        textAlign: 'center',
        marginTop: 5
    }
});
// 输出组件
module.exports = ShopCenter;
