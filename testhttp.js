
'use strict';

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  BackAndroid,
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

var _navigator ;

var TestHttp = React.createClass({

  getInitialState: function(){
    _navigator = this.props.navigator;
    return {};
  },

  getByFetch : function(){
		ToastAndroid.show("getByFetch", ToastAndroid.SHORT);
		fetch('https://m.baidu.com' )
			.then((response) => response.text())
			.then((responseText) => {
				ToastAndroid.show(responseText, ToastAndroid.SHORT);
				console.warn(new Date().getMilliseconds());
			})
			.catch((error) => {
				console.warn(error);
			}).done();
		console.warn('请求是异步的:'+new Date().getMilliseconds());
  },
  getByXMLHttpRequest : function(){
    ToastAndroid.show("getByXMLHttpRequest", ToastAndroid.SHORT);
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        ToastAndroid.show('success'+ request.responseText ,ToastAndroid.SHORT);
      } else {
        console.warn('error');
      }
    };

    request.open('GET', 'https://m.baidu.com');
    request.send();
  },

  postSource:  function(){
    ToastAndroid.show("postSource", ToastAndroid.SHORT);
    fetch('https://m.baidu.com' )
    .then((response) => response.text())
    .then((responseText) => {
        // Works on both iOS and Android
        Alert.alert(
          '请求结果',
          responseText.substring(0,100),
          [
            {text: 'Ask me later', onPress: () => console.warn('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.warn('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.warn('OK Pressed')},
          ]
        )
    })
    .catch((error) => {
      console.warn(error);
    }).done();
  },
  
  render: function() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
        <TouchableOpacity onPress={this.getByFetch} style={ styles.button }>
          <Text  >GET by fetch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.getByXMLHttpRequest} style={ styles.button }>
          <Text >GET by XmlHttpRequest</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= { this.postSource } style={ styles.button }>
          <Text >POST</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
    button: {
      width : 180,
      height: 50,
      justifyContent:'center',
      backgroundColor: '#e2e2e2',
      alignItems:'center',
      margin: 10,
    }
});

module.exports = TestHttp;