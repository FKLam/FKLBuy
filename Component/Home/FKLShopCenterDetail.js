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
    Platform,
    Image,
    TouchableOpacity,
    WebView
} from 'react-native';

var HWidth = Platform.OS == 'ios' ? 28 : 24;

var ShopCenterDetail = React.createClass({
    getInitialState() {
        return{
            detailUrl: this.props.url + '?uuid=51C27BF0DA7F0D2EE93989FB9FF0FBAA2663E8ACE64EB121AADF0495571A86C6&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=PO90iKzWeTHbo-2J-IEItoPyWwIAAAAAFAIAAA147g4FuDE1z7F4cfO-E7HomM1lSsoQ0jso1brxVwJSHV3vPDnacNVGCzMOsSyGFQ&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {/* 首页的导航条 */}
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnable={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    },

    // 导航条
    renderNavBar() {
        return(
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity activeOpacity={0.5} style={styles.leftViewStyle} onPress={() => {this.props.navigator.pop()}}>
                    <Image source={{uri: 'icon_camera_back_normal'}} style={styles.navImageStyle}></Image>
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold', marginTop: 20}}>购物中心详情</Text>
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
        backgroundColor: '#e8e8e8'
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
    },
    leftViewStyle: {
        position: 'absolute',
        left: 10,
        bottom: (44 - HWidth) / 2.0
    }
});
// 输出组件
module.exports = ShopCenterDetail;
