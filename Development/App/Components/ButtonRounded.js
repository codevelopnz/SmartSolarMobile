var React = require('react-native')
var {
    View,
    Text,
    TouchableHighlight
} = React

var styles = require('../Styles/button')

module.exports = React.createClass({
    
    render: function(){
        return(
            <TouchableHighlight
            style={styles.button}
            underlayColor="rgba(5, 165, 209, 0.5)"
            onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
})
