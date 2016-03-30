/**
 * Smart Solar Mobile App
 * https://github.com/codevelopnz/SmartSolarMobile
 */
'use strict';

var React = require('react-native');
var RootRouter = require('./App/Components/RootRouter');

var {
  AppRegistry 
} = React;

var NativeStarterKit = React.createClass({
   render: function() {

        return (
            <RootRouter />   
        )
    }
})

AppRegistry.registerComponent('SmartSolarMobile', () => NativeStarterKit);
