import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Register from './Register';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Register />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});
