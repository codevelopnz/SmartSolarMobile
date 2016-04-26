/* @flow */
'use strict';

var React = require('react-native');
var styles = require('../Styles/style');

var {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  RecyclerViewBackedScrollView,
  Text,
  View,
} = React;



var Settings = React.createClass({
	
	getInitialState: function() {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds.cloneWithRows(['Smart notifications', 'Operation alerts']),
		};
	},
	
	render: function() {

	    return (
	     	<View> 
             	<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <View style={styles.row}><Text>{rowData}</Text><View style={styles.separator}></View></View>}
				/>
	        </View>
	    );
  }
});

module.exports = Settings;