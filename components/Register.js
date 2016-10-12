import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Register extends Component {

  onDriverPress() {
    console.log('driving..')
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.onDriverPress.bind(this)}>
          <Text>Im driving</Text>
        </TouchableHighlight>
      </View>
    );
  }
};
