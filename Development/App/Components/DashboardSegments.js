/* @flow */
'use strict';

var React = require('react-native');
var styles = require('../Styles/style');

var {
    Text,
    Image,   
    View,
    TouchableHighlight
} = React;

var DashboardSegments = React.createClass({

	render: function() {

	    return (
	     	<View style={styles.dashSegments}> 
             <DashboardSegment title="On" />
             <DashboardSegment title="Off" />
             <DashboardSegment title="Boost" />
             <DashboardSegment title="Away" />
	        </View>
	    );
  }
});

var DashboardSegment = React.createClass({
    render: function() {
        return (
            <TouchableHighlight
            style={styles.dashSegment}
            underlayColor="#fff"
            onPress={this.props.onPress}>
                <Text style={styles.dashSegmentText}>{this.props.title}</Text>
            </TouchableHighlight>
        );
    }
});

module.exports = DashboardSegments;
