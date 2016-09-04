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
var hWidth = Dimensions.get('window').width;
var vHeight = Dimensions.get('window').height;

var CommonView = React.createClass({
    getDefaultProps() {
        return{
            title: '',
            subTitle: '',
            rightImage: '',
            titleColor: '',
            tpurl: '',  // 下级界面的URL路径
            // 回调函数
            callBackClickCell: null
        }
    },
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} style={{height: 60}} onPress={() => this.clickCell()}>
                <View style={styles.container}>
                    {/* 左边 */}
                    <View>
                        <Text style={[{color: this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    </View>
                    {/* 左边 */}
                    <Image source={{uri: this.props.rightImage}} style={{width: 64, height: 43, resizeMode: 'contain'}} />
                </View>
            </TouchableOpacity>
        );
    },

    //
    clickCell() {

    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: hWidth * 0.5 - 1,
        height: 59,
        marginBottom: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginRight: 1
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subTitleStyle: {
        color: 'gray'
    }
});
// 输出组件
module.exports = CommonView;
