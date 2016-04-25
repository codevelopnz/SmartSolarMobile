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



var Settings = React.createClass({

	 logout(){		
	 	var Login = require('./Login');

        AppDispatcher.dispatch({
			actionType: 'Navigate',
			component: Login

    	});
    },
    
    home(){
      var Home = require('./Home');
      AppDispatcher.dispatch({
          actionType: 'Navigate',
          component: Home
      });
    },

	render: function() {

	    return (
	     	<View style={styles.bg}> 
	     		<NavigationBar
	     			tintColor={'#EF6C00'}                    
					title={{ 
						title: 'Settings', 
						tintColor: '#fff'
					}}
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
                        selectedIcon={require('././../Images/Tacho-On.png')}
                        onPress={this.home}                        
                        >                    
                    </TabBarIOS.Item>                    
                    <TabBarIOS.Item
                        title="Settings"
                        icon={require('././../Images/Cog.png')}
                        selectedIcon={require('././../Images/Cog-On.png')}
                        >                    
                    </TabBarIOS.Item>
                </TabBarIOS>
	        </View>
	    );
  }
});




module.exports = Settings;
