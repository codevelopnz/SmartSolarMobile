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
    
    settings(){
      var Settings = require('./Settings');
      AppDispatcher.dispatch({
          actionType: 'Navigate',
          component: Settings
      });
    },

	render: function() {

	    return (
	     	<View style={styles.bg}> 
	     		<NavigationBar
	     			tintColor={'#EF6C00'}                    
					title={{ 
						title: 'Dashboard', 
						tintColor: '#fff'
					}}
					 />
				<View style={styles.verticalCenter}>
                    <Text style={home.welcome}>
                        Hey There! Welcome!
                    </Text>
            
	          	</View>
                <TabBarIOS
                    tintColor={'#EF6C00'}
                    translucent={true}>
                    <TabBarIOS.Item
                        title="Dashboard"
                        icon={require('././../Images/Tacho-On.png')}
                        
                        >                    
                    </TabBarIOS.Item>                    
                    <TabBarIOS.Item
                        title="Settings"
                        icon={require('././../Images/Cog.png')}
                        onPress={this.settings}
                        >                    
                    </TabBarIOS.Item>
                </TabBarIOS>
	        </View>
	    );
  }
});




module.exports = Home;
