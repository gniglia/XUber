import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';
import Register from './Register';
import RideMap from './RideMap';

const navigatorBarRouteMaper = {
  LeftButton: (route, navigator, index) => {
    if (route.name === 'Register') {
      return null;
    }

    return (
      <TouchableHighlight onPress={() => {
        if (index > 0) {
          navigator.pop();
        }
      }}>
        <Text>Back</Text>
      </TouchableHighlight>
    )
  },
  RightButton: () => null,
  Title: (route, navigator, index) => {
    if (route.name === 'Register') {
      return null;
    }

    return (
      <Text>{route.title}</Text>
    )
  }
};

const renderScene = (route, navigator) => {
  switch (route.name) {
    case 'Register':
      return (
        <Register route={route} navigator={navigator} />
      )
    case 'RideMap':
      return (
        <RideMap route={route} navigator={navigator} />
      )
  }
};

const App = () => {
  return (
    <Navigator
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});
