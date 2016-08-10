
 
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Navigator,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  ToastAndroid,
  BackAndroid,
} from 'react-native';

var _navigator;

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

class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
	_navigator = this.props.navigator;
  }
  
  clickHttp() {
	  ToastAndroid.show("clickHttp", ToastAndroid.SHORT);
  }
  
  render() {
	let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
	var renderScene = this.renderSceneAndroid;
	var configureScence = this.configureScenceAndroid;

    return (
      <View style={styles.container}>
		
		<TouchableOpacity onPress={this.clickHttp}  style={ styles.button }>
			<Text>NetWork</Text>
		</TouchableOpacity>
		
        <Text style={styles.welcome}>
          Welcome to React Native! - Jim
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
		
		<Text>Hello world!</Text>
	  
	    <Image source={pic} style={{width: 193, height: 110}}/>
		
		<Blink text='I love to blink' />
		
        <TextInput
          style={{height: 40, width: 193}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '??').join(' ')}
        </Text>
		
		
	  <ScrollView style={{height: 140}}>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} />
          <Image source={pic} />
          <Image source={pic} />
          <Image source={pic} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Image source={pic} />
          <Image source={pic} />
          <Image source={pic} />
          <Image source={pic} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Image source={pic} />
          <Image source={pic} />
          <Image source={pic} />
          <Image source={pic} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Image source={pic} />
          <Image source={pic} />
          <Image source={pic} />
          <Image source={pic} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Image source={pic} />
          <Image source={pic} />
          <Image source={pic} />
          <Image source={pic} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
		  
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Test1;