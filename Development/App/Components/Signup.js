/* @flow */
'use strict';

var React = require('react-native');

var styles = require('../Styles/style');
var login = require('../Styles/login');
var ButtonFull = require('./ButtonFull');
var ButtonBordered = require('./ButtonBordered');
var ButtonLink = require('./ButtonLink');
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
                
                <Image source={require('image!logo')} style={login.logo}/>
                <Text style={styles.logo}>
                
                </Text>  
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



module.exports = Login;
