var React = require('react-native')
var Button = require('./Button');
var styles = require('../Styles/style');

var AppDispatcher = require('./../Dispatcher/AppDispatcher');

var {
    SwitchIOS,
    View,
    Text,
    TouchableHighlight
} = React

module.exports = React.createClass({

    home(){
        var Home = require('./Home');
          AppDispatcher.dispatch({
          actionType: 'Navigate',
          component: Home

    });
       
    },
    render(){
        return (
            <View style={styles.sidebar}>
                <TouchableHighlight 
                    style={styles.link}
                    underlayColor="rgba(50, 105, 69, 0.4)"
                    onPress={this.home}>
                    <Text style={styles.linkText}> Home </Text>
                </TouchableHighlight>
                 <TouchableHighlight 
                    style={styles.link}
                    underlayColor="rgba(50, 105, 69, 0.4)"
                    onPress={this.account}>
                    <Text style={styles.linkText}> Accounts </Text>
                </TouchableHighlight>
                <Button
                    onPress={this.props.close}
                    text="Close" />
            </View>
        )
    }
})
