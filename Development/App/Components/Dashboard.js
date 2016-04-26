/* @flow */
'use strict';

var React = require('react-native');
var styles = require('../Styles/style');
var DashboardSegments = require('./DashboardSegments');
var SimpleChart = require('./Chart');

var {
    Text,
    Image,   
    View,
} = React;

var Dashboard = React.createClass({

	render: function() {

	    return (
	     	<View> 
             
             <DashboardSegments />
	        </View>
	    );
  }
});

module.exports = Dashboard;
