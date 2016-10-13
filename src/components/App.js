import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import Register from './Register';
import RideMap from './RideMap';
import DriverMap from './DriverMap';
var styles = require('../styles/styles');

const navigatorBarRouteMaper = {
  LeftButton: (route, navigator, index) => {
    if (route.name === 'Register') {
      return null;
    }

    return (
      <TouchableHighlight
      underlayColor={ 'transparent' }
      style={[styles.backButtonHighlight]}
      onPress={() => {
        if (index > 0) {
          navigator.pop();
        }
      }}>
        <Text style={[styles.backButton]}>{' <'}</Text>
      </TouchableHighlight>
    )
  },
  RightButton: () => null,
  Title: (route, navigator, index) => {
    if (route.name === 'Register') {
      return null;
    }

    return (
      <Text style={{fontSize: 30, color: 'white'}}>xuber</Text>
    )
  }
};

const renderScene = (route, navigator) => {
  switch (route.name) {
    case 'Register':
      StatusBar.setBarStyle('default');
      return (
        <Register route={route} navigator={navigator} />
      )
    case 'RideMap':
      StatusBar.setBarStyle('light-content');
      return (
        <RideMap route={route} navigator={navigator} />
      )
    case 'DriverMap':
      StatusBar.setBarStyle('light-content');
      return (
        <DriverMap route={route} navigator={navigator} />
      )
  }
};

const App = () => {
  return (
    <Navigator
      style={{backgroundColor: '#264762'}}
      initialRoute={{name: 'Register'}}
      renderScene={renderScene}
      configureScene={(route) => {
        if (route.sceneConfig) {
          return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
      }}
      navigationBar={
        <Navigator.NavigationBar routeMapper={navigatorBarRouteMaper} />
      }
    />
  );
};

export default App;
