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
            style={styles.buttonLink}
            underlayColor="#fff"
            onPress={this.props.onPress}>
                <Text style={styles.buttonTextLink}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
})
