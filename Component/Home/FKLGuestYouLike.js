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
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入外部组件类
var CommonCell = require('./FKLBottomCommonCell');

// 导入外部的json数据
var youLikeData = require('../../LocalData/HomeGeustYouLike.json');

var GuestYouLike = React.createClass({
    getDefaultProps() {
        return{
            api_url: 'http://api.meituan.com/group/v2/recommend/homepage/city/20?msid=091386E4-795F-4582-882B-BF26ED8CE7CC2016-09-04-11-58464&userid=14515231&__vhost=api.mobile.meituan.com&position=23.124092%2C113.387190&movieBundleVersion=100&utm_term=7.2.0&limit=40&wifi-mac=8c%3Aa6%3Adf%3A87%3Ae8%3A83&ci=20&__skcy=h0b1jUL0wl0DFdZzLdgwgh32adQ%3D&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=117a9e930bf59f4361027eb34d8feb71&wifi-name=TP-LINK_E883&client=iphone&uuid=51C27BF0DA7F0D2EE93989FB9FF0FBAA2663E8ACE64EB121AADF0495571A86C6&__skts=1472961731.911086&__skno=7BC707D7-4BB4-4A09-BE2D-253A45E69D55&utm_content=51C27BF0DA7F0D2EE93989FB9FF0FBAA2663E8ACE64EB121AADF0495571A86C6&utm_source=AppStore&utm_medium=iphone&version_name=7.2.0&wifi-cur=0&wifi-strength=&offset=0&supportId=1&__reqTraceID=63EC23B3-4BA9-4E76-994A-5320AD967305&js_patch_version=12&rn_package_version=0&utm_campaign=AgroupBgroupD200GhomepageH0&userId=14515231'
        }
    },
    getInitialState() {
        // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return{
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <CommonCell
                    leftIcon="cnxh"
                    leftTitle="猜你喜欢"
                />
                {/* 列表 */}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },

    componentDidMount() {
        // 网络上请求数据
        this.loadDataFromNet();
    },
    loadDataFromNet() {
        fetch(this.props.api_url)
            .then((response) => response.json())
            .then((responseData) => {
                // console.log(responseData);
                // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                })
            })
            .catch((error) => {
                // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(youLikeData.data)
                })
            })
    },
    renderRow(rowData) {
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.listViewStyle}>
                    {/* 左边 */}
                    <Image source={{uri: this.dealWithImgUrl(rowData.imageUrl)}} style={styles.imageViewStyle} />
                    {/* 右边 */}
                    <View style={styles.rightViewStyle}>
                        <View style={styles.rightTopViewStyle}>
                            <Text>{rowData.title}</Text>
                            <Text>{rowData.topRightInfo}</Text>
                        </View>
                        <Text style={{color: 'gray'}}>{rowData.subTitle}</Text>
                        <View style={styles.rightBottomViewStyle}>
                            <Text style={{color: 'red'}}>{rowData.subMessage}</Text>
                            <Text>{rowData.bottomRightInfo}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    dealWithImgUrl(url) {
        if ( url.search('w.h') == -1 )
            return url;
        return url.replace('w.h', '120.90');
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
    imageViewStyle: {
        width: 120,
        height: 90
    },
    listViewStyle: {
        backgroundColor: 'white',
        padding: 10,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        flexDirection: 'row'
    },
    rightViewStyle: {
        marginLeft: 8,
        width: 220,
        justifyContent: 'center'
    },
    rightTopViewStyle: {
        flexDirection: 'row',
        marginBottom: 7,
        justifyContent: 'space-between'
    },
    rightBottomViewStyle: {
        flexDirection: 'row',
        marginTop: 7,
        justifyContent: 'space-between'
    }
});
// 输出组件
module.exports = GuestYouLike;
