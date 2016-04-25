/* @flow */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var Dashboard = require('./Dashboard');
var Settings = require('./Settings');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

var TabBar = React.createClass({
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
          <Dashboard />
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
          <Settings />
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

module.exports = TabBar;