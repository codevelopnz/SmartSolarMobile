/* @flow */
'use strict';

var React = require('react-native');

var styles = require('../Styles/style');
var login = require('../Styles/login');
var Button = require('./Button');
var AppDispatcher = require('./../Dispatcher/AppDispatcher');

var {
    View,
    Text,
    TextInput,
    Image
} = React;

var Login = React.createClass({
    login(){
        var Home = require('./Home');
        AppDispatcher.dispatch({
            actionType: 'Navigate',
            component: Home

        });

    },
    render: function() {
        return (
            <View  style={login.bg}> 
                
                <Image source={require('image!logo')} style={login.logo}/>
                <Text style={styles.logo}>
                StartReact.com
                </Text>   
                <Text style={styles.desc}>
                React Native Starter Kit
                </Text>  
                <View style={login.border}>   
                    <TextInput
                        style={login.textInput}
                        placeholder={'EMAIL'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7'} />
                </View>
                <View style={login.border}>
                    <TextInput
                        style={login.textInput}
                        placeholder={'PASSWORD'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7'} />
                </View>
                <View style={{marginTop: 15}}>
                <Button
                    style={login.button}                
                    onPress={this.login}
                    text="Login" />   
                </View>
            </View>
        );
    }
});



module.exports = Login;
