
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
      console.warn(new Date().getMilliseconds());
  },
  getByXMLHttpRequest : function(){
      ToastAndroid.show("getByXMLHttpRequest", ToastAndroid.SHORT);
      console.warn(new Date().getMilliseconds());
  },

  postSource:  function(){
      ToastAndroid.show("postSource", ToastAndroid.SHORT);
      console.warn(new Date().getMilliseconds());
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