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
    getInitialState: function() {
        return {
            selectedSegment: 'segmentOn'
        };
    },
    
	render: function() {

	    return (
	     	<View style={styles.dashSegments}> 
             <DashboardSegment 
                title="On" 
                selected={this.state.selectedSegment === 'segmentOn'} 
                onPress={() => {
                    this.setState({
                        selectedSegment: 'segmentOn'
                    });
                }}
                />
             <DashboardSegment 
                title="Off"
                selected={this.state.selectedSegment === 'segmentOff'}
                onPress={() => {
                    this.setState({
                        selectedSegment: 'segmentOff'
                    });
                }}
                />
             <DashboardSegment 
                title="Boost" 
                selected={this.state.selectedSegment === 'segmentBoost'}
                onPress={() => {
                    this.setState({
                        selectedSegment: 'segmentBoost'
                    });
                }}
                />
             <DashboardSegment 
                title="Away" 
                selected={this.state.selectedSegment === 'segmentAway'}
                onPress={() => {
                    this.setState({
                        selectedSegment: 'segmentAway'
                    });
                }}
                />
	        </View>
	    );
  }
});

var DashboardSegment = React.createClass({
    render: function() {
        const { selected } = this.props;
        let segStyle = styles.dashSegment;
        let segTextStyle = styles.dashSegmentText;
        if (selected) {
            segStyle = styles.dashSegmentOn;
            segTextStyle = styles.dashSegmentTextOn;            
        }
        return (
            <TouchableHighlight
            style={segStyle}
            onPress={this.props.onPress}>
                <Text style={segTextStyle}>{this.props.title}</Text>
            </TouchableHighlight>
        );
    }
});

module.exports = DashboardSegments;
