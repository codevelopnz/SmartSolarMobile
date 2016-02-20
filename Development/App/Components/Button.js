var React = require('react-native')
var {
    View,
    Text,
    TouchableHighlight
} = React

var styles = require('../Styles/style')

module.exports = React.createClass({
    
    render: function(){
        return(
            <TouchableHighlight
            style={styles.button}
            underlayColor="#EF6C00"
            onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
})
