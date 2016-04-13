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
    TabBarIOS,
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
          tintColor: '#fff',
	      handler: () => {
	      	var Login = require('./Login');

	         AppDispatcher.dispatch({
	          actionType: 'Back',
	    	});
	      }
		};

	  	const rightButtonConfig = {
	      title: 'Menu',
          tintColor: '#fff',
	      handler: () => {
	      	AppDispatcher.dispatch({
	          actionType: 'Open',
	    	});
	      }
		};

	    return (
	     	<View style={styles.bg}> 
	     		<NavigationBar
	     			tintColor={'#EF6C00'}                    
					title={{ 
						title: 'Home', 
						tintColor: '#fff'
					}}
					leftButton={leftButtonConfig}
					rightButton={rightButtonConfig}
					 />
				<View style={styles.verticalCenter}>
                    <Text style={home.welcome}>
                        Hey There! Welcome!
                    </Text>
                
                    <ButtonRounded
                        onPress={this.logout}
                        text="Logout" />               
	          	</View>
                <TabBarIOS
                    tintColor={'#EF6C00'}
                    translucent={true}>
                    <TabBarIOS.Item
                        title="Dashboard"
                        icon={require('././../Images/Tacho.png')}
                        >                    
                    </TabBarIOS.Item>                    
                    <TabBarIOS.Item
                        title="Settings"
                        icon={require('././../Images/Cog.png')}
                        >                    
                    </TabBarIOS.Item>
                </TabBarIOS>
	        </View>
	    );
  }
});




module.exports = Home;
