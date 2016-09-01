import React, { Component, PropTypes } from 'react';
var {requireNativeComponent, View, ToastAndroid} = require('react-native');

var myTextView = {
    name: 'MyTextView',
    propTypes: {
        text: PropTypes.string,
        textSize: PropTypes.number,
        textColor: PropTypes.number,
        isAlpha: PropTypes.bool,
        ...View.propTypes // include the default view properties
    }
}
var RCTMyView = requireNativeComponent('JimTextView', myTextView);

class MyJimTextView extends Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event:Event) {
        if (!this.props.onChangeMessage) {
            return;
        }
        if (event.nativeEvent.message === 'MyMessage') {
            this.props.onChangeMessage();
        }
    }

    render() {
        return <RCTMyView {...this.props} onChange={this._onChange}/>;
    }
}

MyJimTextView.propTypes = {
    onChangeMessage: PropTypes.func,
}
module.exports = MyJimTextView;