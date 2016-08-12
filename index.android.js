/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Navigator,
  ToastAndroid,
} from 'react-native';

var _navigator;
var TestHttp = require('./testhttp.js');
var Test1= require('./test1.js');
var ShopView = require('./shop.android.js');
var ViewPager = require('./viewpager.android.js');
var Userinfo = require('./userinfo.js');

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  configureScenceAndroid(){
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderSceneAndroid(route, navigator){
    _navigator = navigator;
    if(route.id === 'main'){
      return (
        <View>

			<Text style={styles.welcome}>
			  Welcome to APP!
			</Text>


			<TouchableOpacity onPress={ () => _navigator.push({title:'Http',id:'http'}) }  style={ styles.button }>
				<Text>NetWork</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => _navigator.push({title:'Test1',id:'test1'})} style={ styles.button }>
				<Text>Test1</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => _navigator.push({title:'Shop',id:'shop'})} style={ styles.button }>
				<Text>SHOP</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => _navigator.push({title:'ViewPager',id:'viewpager'})} style={ styles.button }>
				<Text>ViewPager</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => _navigator.push({title:'UserInfoView',id:'userinfo'})} style={ styles.button }>
				<Text>Userinfo</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => _navigator.push({title:'NewsView',id:'news'})} style={ styles.button }>
				<Text>News</Text>
			</TouchableOpacity>
        </View>
       );
    }

    if(route.id === 'http'){
		ToastAndroid.show("http", ToastAndroid.SHORT);
      return (
        <TestHttp navigator={navigator} route={route} />
       );
    }
	if (route.id === 'test1') {
		ToastAndroid.show("Test1", ToastAndroid.SHORT);
		return (
			<Test1 navigator={navigator} route={route} />
		);
	}
    if(route.id === 'shop'){
      return (
        <ShopView navigator={navigator} route={route}/>
      );
    }
    if(route.id === 'viewpager'){
      return (
        <ViewPager navigator={navigator} route={route}/>
      );
    }
    if(route.id === 'userinfo'){
      return (
        <Userinfo navigator={navigator} route={route}/>
      );
    }
  }

  render() {
	var renderScene = this.renderSceneAndroid;
	var configureScence = this.configureScenceAndroid;

    return (
		  <Navigator
			debugOverlay={false}
			initialRoute={{ title: 'Main', id: 'main' }}
			configureScence={{ configureScence }}
			renderScene={renderScene}
		  />

    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button:{
    height:56,
    margin:10,
    backgroundColor:'#cad6c5',
    justifyContent:'center',
    alignItems:'center',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
