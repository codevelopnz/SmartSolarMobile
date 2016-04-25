/* @flow */
'use strict';

var React = require('react-native');
var styles = require('../Styles/style');
var NavigationBar = require('react-native-navbar');
var ButtonRounded = require('./ButtonRounded');
var home = require('../Styles/home');
var Button = require('./Button');
var AppDispatcher = require('./../Dispatcher/AppDispatcher');
var TabBar = require('./TabBar');

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

	    return (
	     	<View style={styles.bg}> 
	     		<NavigationBar
	     			tintColor={'#EF6C00'}                    
					title={{ 
						title: '', 
						tintColor: '#fff'
					}}
					 />
				<View style={styles.verticalCenter}>
                    <Text style={home.welcome}>
                        Hey There! Welcome!
                    </Text>
            
	          	</View>
                <TabBar />
	        </View>
	    );
  }
});




module.exports = Home;
