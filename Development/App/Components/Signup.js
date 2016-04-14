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

var SignUp = React.createClass({
    login(){
        var SignUp = require('./Signup');
        AppDispatcher.dispatch({
            actionType: 'Navigate',
            component: SignUp

        });

    },
    signUp(){
        var Home = require('./Home');
        AppDispatcher.dispatch({
            actionType: 'Navigate',
            component: Home

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
                        onPress={this.signUp}
                        text="SIGN UP" />   
                </View>
                <View style={{marginTop: 15}}>
                    <ButtonBordered
                        style={login.buttonBordered}
                        onPress={this.login}
                        text="Log In"
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



module.exports = SignUp;
