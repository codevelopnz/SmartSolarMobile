var React = require('react-native')
var {
    View,
    Text,
    TouchableHighlight,
    Dimensions
} = React

var styles = require('../Styles/style')

var windowWidth = Dimensions.get('window').width;

module.exports = React.createClass({
    
    render: function(){
        return(
            <TouchableHighlight
            style={[styles.buttonFull, {width: windowWidth}]}
            underlayColor="#fff"
            onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
})
