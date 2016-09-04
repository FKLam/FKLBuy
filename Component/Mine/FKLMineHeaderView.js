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
} from 'react-native';

var Dimensions = require('Dimensions');
var HWidth = Dimensions.get('window').width;

var MineHeaderView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/* 上部分 */}
                {this.renderTopView()}
                {/* 下部分 */}
                {this.renderBottomView()}
            </View>
        );
    },

    // 上部分
    renderTopView() {
        return(
            <View style={styles.topViewStyle}>
                <Image source={{uri: 'see'}} style={styles.leftIconStyle} />
                <View style={styles.centeViewStyle}>
                    <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>小码哥电商</Text>
                    <Image source={{uri: 'avatar_vip'}} style={{width: 17, height: 17}} />
                </View>
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 8}} />
            </View>
        )
    },

    // 下部分
    renderBottomView() {
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        )
    },

    renderBottomItem() {
        var itemArr = [];
        var data = [{'number' : '100', 'title' : '马哥卷'}, {'number' : '12', 'title' : '评价'}, {'number' : '50', 'title' : '收藏'}];
        for ( var index = 0; index < data.length; index++ ) {
            var item = data[index];

            itemArr.push(
                <TouchableOpacity key={index}  activeOpacity={0.5}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color: 'white'}}>{item.number}</Text>
                        <Text style={{color: 'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }

        return itemArr;
    }
});

const styles = StyleSheet.create({
    container: {
        height: Platform.OS == 'ios' ? 400 : 200,
        backgroundColor: 'rgba(255, 96, 0, 1.0)'
    },
    centeViewStyle: {
        flexDirection: 'row',
        width: HWidth * 0.72
    },
    leftIconStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    topViewStyle: {
        flexDirection: 'row',
        marginTop: Platform.OS == 'ios' ? 280 : 80,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    bottomViewStyle: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    bottomInnerViewStyle: {
        width: (HWidth / 3.0) + 1.0,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: 'white'
    }
});
// 输出组件
module.exports = MineHeaderView;
