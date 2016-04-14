/* @flow */
'use strict';

var React = require('react-native');

var login = require('../Styles/login');
var AppDispatcher = require('./../Dispatcher/AppDispatcher');

var {
    View,
    Text,
    TextInput,
    Image,
    Dimensions
} = React;

var LoginForm = React.createClass({

    render: function() {
        return (
            <View style={login.form}> 
                <View style={login.borderTop}>   
                    <TextInput
                        style={login.textInput}
                        placeholder={'EMAIL'}
                        placeholderTextColor={'rgba(109, 110, 133, 0.6)'} />
                </View>
                <View style={login.border}>
                    <TextInput
                        style={login.textInput}
                        placeholder={'PASSWORD'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(109, 110, 133, 0.6)'} />
                </View>
                             
            </View>
        );
    }
});



module.exports = LoginForm;





