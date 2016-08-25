
'use strict'

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Navigator,
  ScrollView,
  ViewPager,
  ToastAndroid,
  BackAndroid,
  ViewPagerAndroid,
  Image,
  ListView,
} from 'react-native';



BackAndroid.addEventListener('hardwareBackPress', function() {
  if(_navigator == null){
    return false;
  }
  if(_navigator.getCurrentRoutes().length === 1){
    return false;
  }
  _navigator.pop();
  return true;
});

var _navigator;

var JT_LoginView = React.createClass({

  getInitialState: function(){
    _navigator = this.props.navigator;
    return {
      mobile: '13311112222',
	  validateCode: '1234'
    };
  },
  doLogin:function(){
    var datas = [];
    fetch('http://dev.junhuahomes.com/user/checkNum?mobile=' + this.state.mobile + '&validatecode=' + this.state.validateCode + '&xgToken=1234')
		.then((response) => response.text())
		.then((responseText) => {
		  var jsonObject = eval("(" + responseText + ")");
		  if (jsonObject.userPhone) {
			  ToastAndroid.show("Logged in success", ToastAndroid.SHORT);
			  _navigator.replace({title:'Index',id:'JT_IndexView'})
		  } else {
			  ToastAndroid.show("" + jsonObject.message, ToastAndroid.SHORT);
		  }
		})
		.catch((error) => {
		  console.warn(error);
		}).done;
    return datas;
  },
  goBack: function() {
	_navigator.pop();
  },

  render:function(){
    return (
		<View style={styles.verticalContainer}>
			<View style={styles.toolBarStyle}>
				<TouchableOpacity onPress={this.goBack} style={styles.button}>
					<Image source={require('./img/ic_back_black.png')} style={{  width: 20, height: 20}} />
				</TouchableOpacity>
				<Text style={{marginLeft: 10, color: 'white', alignItems:'center'}} >Login</Text>
			</View>
			<TextInput
				style={{height: 40, marginLeft: 10, marginRight: 10}}
				placeholder="Input mobile NO."
				onChangeText={(text) => this.setState({mobile: text})}
				value={this.state.mobile}
			/>
			<TextInput
				style={{height: 40, marginLeft: 10, marginRight: 10}}
				placeholder="Input code."
				onChangeText={(text) => this.setState({validateCode: text})}
				value={this.state.validateCode}
			/>
			<TouchableOpacity onPress={this.doLogin} style={styles.button}>
				<Text>Login</Text>
			</TouchableOpacity>
		</View>
    );
  },
});
var styles = StyleSheet.create({
	toolBarStyle: {
		flexDirection: 'row',
		backgroundColor: '#70c59f',
		alignItems: 'center',
		height:50
	},
	verticalContainer:{
		flexDirection: 'column',
		backgroundColor: '#f5f5f5',
	},
    button: {
      height: 50,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#e2e2e2',
      margin: 10,
    }
});

module.exports = JT_LoginView;
