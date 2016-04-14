/* @flow */
'use strict';

var React = require('react-native');

var login = require('../Styles/login');
var ButtonFull = require('./ButtonFull');
var ButtonBordered = require('./ButtonBordered');
var ButtonLink = require('./ButtonLink');
var LoginForm = require('./LoginForm');
var AppDispatcher = require('./../Dispatcher/AppDispatcher');

var {
    View,
    Text,
    TextInput,
    Image,
    Dimensions
} = React;

var windowWidth = Dimensions.get('window').width;

var Login = React.createClass({
    login(){
        var Home = require('./Home');
        AppDispatcher.dispatch({
            actionType: 'Navigate',
            component: Home

        });

    },
    signUp(){
        var SignUp = require('./Signup');
        AppDispatcher.dispatch({
            actionType: 'Navigate',
            component: SignUp

        });
    },
    render: function() {
        return (
            <View  style={login.bg}> 
                
                <Image source={require('./../Images/logo.png')} style={login.logo}/>

                <LoginForm />
                
                <View style={{marginTop: 15}}>
                    <ButtonFull
                        style={login.buttonFull}                
                        onPress={this.login}
                        text="LOG IN" />   
                </View>
                <View style={{marginTop: 15}}>
                    <ButtonBordered
                        style={login.buttonBordered}
                        onPress={this.signUp}
                        text="Sign Up"
                        />
                </View>
                <View style={{marginTop: 30}}>
                    <ButtonLink
                        style={login.buttonLink}
                        onPress={this.signUp}
                        text="Forgot Your Password?"
                        />
                </View>                
            </View>
        );
    }
});



module.exports = Login;
