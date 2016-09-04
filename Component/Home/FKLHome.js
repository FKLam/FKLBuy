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
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var HWidth= Dimensions.get('window').width;
var VHeight = Dimensions.get('window').height;
var TopView = require('./FKLTopView');
var HomeMiddleView = require('./FKLHomeMiddleView');
var BottomView = require('./FKLMiddleBottomView');
var ShopCenter = require('./FKLShopCenter');
var ShopCenterDetail = require('./FKLShopCenterDetail');
var GuestYouLike = require('./FKLGuestYouLike');

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/* 首页的导航条 */}
                {this.renderNavBar()}

                {/* 首页的主要内容 */}
                <ScrollView>
                    {/* 头部的View */}
                    <TopView />
                    {/* 中间的内容 */}
                    <HomeMiddleView />
                    {/* 中间下班部分的内容 */}
                    <BottomView
                        popTopHome={() => {this.pushToDetail()}}
                    />
                    {/* 购物中心 */}
                    <ShopCenter
                        popToHomeView={(url) => this.pushToShopCenterDetail(url)}
                    />
                    {/* 猜你喜欢 */}
                    <GuestYouLike />
                </ScrollView>
            </View>
        );
    },

    // 首页的导航条
    renderNavBar() {
        return(
            <View style={styles.navBarStyle}>
                <TouchableOpacity activeOpacity={0.5}>
                    {/* 左边 */}
                    <Text style={{color: 'white', fontSize: 18, marginTop: 11}}>广州</Text>
                </TouchableOpacity>
                {/* 中间 */}
                <TextInput
                    placeholder="请输入商家,品类,商圈"
                    style={styles.topInputStyle}
                />
                {/* 右边 */}
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image source={{uri: 'icon_homepage_message'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image source={{uri: 'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    },
    pushToDetail() {

    },

    // 跳转到购物中心的详情页
    pushToShopCenterDetail(url) {
        if( url == null ) return;
        this.props.navigator.push({
            component: ShopCenterDetail,
            passProps: {'url': this.dealWithUrl(url)}
        });
    },
    // 处理URL
    dealWithUrl(url) {
        return url.replace('imeituan://www.metuan.com/web/?url=', '');
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    rightNavViewStyle: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        marginTop: 11
    },
    topInputStyle: {
        width: HWidth * 0.7,
        height: 32,
        backgroundColor: 'white',
        marginTop: Platform.OS == 'ios' ? 22 : 0,
        borderRadius: 16,
        paddingLeft: 10
    },
    navRightImgStyle: {
        width: Platform.OS == 'ios' ? 28 : 24,
        height: Platform.OS == 'ios' ? 28 : 24
    },
    navBarStyle: {
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255, 96, 0, 1.0)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
// 输出组件
module.exports = Home;
