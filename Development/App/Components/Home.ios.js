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
} = React;



var Home = React.createClass({

	 logout(){		
	 	var Login = require('./Login');

        AppDispatcher.dispatch({
			actionType: 'Navigate',
			component: Login

    	});
    },

	render: function() {

	  	const leftButtonConfig = {
	      title: 'Back',
	      handler: () => {
	      	var Login = require('./Login');

	         AppDispatcher.dispatch({
	          actionType: 'Back',
	    	});
	      }
		};

	  	const rightButtonConfig = {
	      title: 'Menu',
	      handler: () => {
	      	AppDispatcher.dispatch({
	          actionType: 'Open',
	    	});
	      }
		};

	    return (
	     	<View style={styles.bg}> 
	     		<NavigationBar
	     			tintColor={'rgba(0, 0, 0, 0.5)'}
					title={{ 
						title: 'Home', 
						tintColor: '#fff'
					}}
					leftButton={leftButtonConfig}
					rightButton={rightButtonConfig}
					statusBar={{
						style: 'light-content',
						hidden: false
					}} />
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
