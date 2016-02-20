/* @flow */
'use strict';

var React = require('react-native');
var styles = require('../Styles/style');
var NavigationBar = require('react-native-navbar');
var ButtonRounded = require('./ButtonRounded');
var home = require('../Styles/home');
var Button = require('./Button');
var AppDispatcher = require('./../Dispatcher/AppDispatcher');

var {   
    Text,
    Image,   
    View,
    BackAndroid,
} = React;


BackAndroid.addEventListener('hardwareBackPress', function() {
		console.log('Back');
        AppDispatcher.dispatch({
	        actionType: 'Back'        

    	});
		return true;
});

var Home = React.createClass({

	 logout(){		
	 	var Login = require('./Login');

        AppDispatcher.dispatch({
			actionType: 'Navigate',
			component: Login

    	});
    },

	render: function() {

	  	

	    return (
	     	<View style={styles.bg}> 
	     		
				<View style={styles.verticalCenter}>
	     		<Text style={home.welcome}>
	     			Hey There! Welcome!
	 			</Text>
	           
	            <ButtonRounded
	                onPress={this.logout}
	            	text="Logout" />               
	          	</View>
	        </View>
	    );
  }
});




module.exports = Home;
