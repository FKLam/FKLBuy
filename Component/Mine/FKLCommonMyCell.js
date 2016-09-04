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
    Switch,
} from 'react-native';

var MyCell = React.createClass({
    getDefaultProps() {
        return{
            leftIconName: '',
            leftTitle: '',
            rightIconName: '',
            rightTitle: ''
        }
    },
    getInitialState() {
        return{
            isOn: false
        }
    },
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.container}>
                    {/* 左边 */}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri: this.props.leftIconName}} style={styles.leftImgStyle} />
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    {/* 右边 */}
                    <View style={styles.rightViewStyle}>
                        {this.rightSubView()}
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    // 右边的内容
    rightSubView() {
        return(
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {this.renderRightContent()}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 8, marginLeft: 5}} />
            </View>
        )
    },

    // 右边显示的具体内容
    renderRightContent() {
        if ( this.props.rightTitle.length > 0 ) {
            return(
                <Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>
            )
        } else {
            if ( this.props.rightIconName.length == 0 )
                return;
            return(
                <Image source={{uri: this.props.rightIconName}} style={{width: 24, height: 13}} />
            )
        }
    }

});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: Platform.OS == 'ios' ? 44 : 30,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8
    },
    leftImgStyle: {
        width: 24,
        height: 24,
        marginRight: 6,
        borderRadius: 12
    },
    leftTitleStyle: {
        fontSize: 16
    },
    rightViewStyle: {

    }
});
// 输出组件
module.exports = MyCell;
