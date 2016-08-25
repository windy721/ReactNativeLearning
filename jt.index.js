
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

var JT_IndexView = React.createClass({

	getInitialState: function(){
		_navigator = this.props.navigator;
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds.cloneWithRows(this._getData()),
		};
	},
	_getData:function(){
		var datas = [];
		fetch('http://dev.junhuahomes.com/imapi/message/center/getMsgListByApp?platform=android&currentVer=1.1.0&imei=imei&login=5a9947bf24ad49b5966f7d2198ad4139&pageNum=1&bizType=SYS_MESSAGE&channel=dev&osInfo=android+6.0.1&numPerPage=20&model=SM-G9250&')
			.then((response) => response.text())
			.then((responseText) => {
				var jsonObject = eval("(" + responseText + ")");
				var array = jsonObject.recordList;
				for(var i=0; i<array.length; i++ ){
					datas.push(array[i]);
				}
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(datas),
					isLoading: false
				});
		})
		.catch((error) => {
			console.warn(error);
		}).done;
		return datas;
	},
	goBack: function() {
		_navigator.pop();
	},
	
	_renderSeperator: function(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
		return (
		  <View
			style={{
			  height: adjacentRowHighlighted ? 4 : 1,
			  backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
			}}
		  />
		);
	},

	render:function(){
		return (
			<View style={styles.verticalContainer}>
				<View style={styles.toolBarStyle}>
					<Text style={{marginLeft: 10, color: 'white', alignItems:'center'}} >Welcome</Text>
				</View>
				
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) =>
                    <TouchableOpacity>
                        <View style={{ flexDirection:'row', alignItems: 'center' }}>
							<Image source={require('./img/ic_message_icon.png')} style={{height:40,width:40, margin:10,}} />
							<View>
								<Text style={{marginTop:0, color:'#234', fontSize:16,}}>{rowData.title}</Text>
								<View style={{height:1.5,  backgroundColor:'#222' }}></View>
								<Text style={{marginTop:6, color:'#888', fontSize:12,}}>{rowData.createTimeStr}</Text>
							</View>
                        </View>
                    </TouchableOpacity>}
					renderSeparator={this._renderSeperator}
				/>
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

module.exports = JT_IndexView;
