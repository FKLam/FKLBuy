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
  Navigator,
} from 'react-native';


// 导入外部组件类
var Launch = require('./Component/Main/FKLLaunchImage');

class FKLBuy extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name: '启动页', component: Launch}}
            configureScene={() => {
                return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator} />;
            }}
        />
    );
  }
}

AppRegistry.registerComponent('FKLBuy', () => FKLBuy);
