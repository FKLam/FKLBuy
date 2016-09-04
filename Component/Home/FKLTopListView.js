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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var HWidth = Dimensions.get('window').width;

// 全局的变量
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70 : 60;
var cellH = Platform.OS == 'ios' ? 70 : 70;
var hMargin = (HWidth - cellW * cols) / ( cols + 1 );

var TopListView = React.createClass({
    getDefaultProps() {
        return{
            dataArr: []
        }
    },
    getInitialState() {
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        return{
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    },
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            >

            </ListView>
        );
    },

    // 具体的cell
    renderRow(rowData) {
        return(
            <TouchableOpacity activeOpacity={0.5} style={{height: 80}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri: rowData.image}} style={{width: 52, height: 52}} />
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
});

const styles = StyleSheet.create({
    contentViewStyle: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: HWidth
    },
    cellStyle: {
        height: cellH,
        width: cellW,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: hMargin
    },
    titleStyle: {
        fontSize: Platform.OS == 'ios' ? 14 : 12,
        color: 'gray'
    }
});
// 输出组件
module.exports = TopListView;
