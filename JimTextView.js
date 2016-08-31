var {requireNativeComponent, View} = require('react-native');
var {PropTypes} = require('react');

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
module.exports = requireNativeComponent('JimTextView', myTextView);