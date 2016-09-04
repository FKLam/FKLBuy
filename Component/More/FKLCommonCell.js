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

var CommonCell = React.createClass({
    getDefaultProps() {
        return{
            title: '',  // 标题
            isSwitch: false, // 是否展示开关
            rightTitle: '',
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
                    <Text style={{marginLeft: 8}}>{this.props.title}</Text>
                    {/* 右边 */}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },

    // cell右边显示的内容
    renderRightView() {
        // 判断
        if( this.props.isSwitch )
        {
            return(
                <Switch
                    value={this.state.isOn == true}
                    onValueChange={() => {
                        this.setState({
                            isOn: !this.state.isOn
                        })
                    }}
                    style={{marginRight: 8}}
                />
            )
        } else {
            return(
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 8}} />
                </View>
            )
        }
    },

    rightTitle() {
        if ( this.props.rightTitle.length == 0 )
            return;
        return(
            <Text style={{color: 'green', marginRight: 3}}>{this.props.rightTitle}</Text>
        )
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
        alignItems: 'center',
    },
});
// 输出组件
module.exports = CommonCell;
