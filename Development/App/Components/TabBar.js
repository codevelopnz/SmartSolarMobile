/* @flow */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

var TabBarExample = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: '',

  getInitialState: function() {
    return {
      selectedTab: 'dashTab'
    };
  },

  _renderContent: function(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor={'#EF6C00'}
        translucent={true}>
        <TabBarIOS.Item
          title="Dashboard"
          icon={require('././../Images/Tacho.png')}
          selectedIcon={require('././../Images/Tacho-On.png')}
          selected={this.state.selectedTab === 'dashTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'dashTab',
            });
          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          icon={require('././../Images/Cog.png')}
          selectedIcon={require('././../Images/Cog-On.png')}
          selected={this.state.selectedTab === 'settingsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'settingsTab'
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = TabBarExample;