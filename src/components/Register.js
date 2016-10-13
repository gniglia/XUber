import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
var styles = require('../styles/styles');

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' };
  }

  onPassengerPress() {
    console.log('passenger..')

    this.props.navigator.push({
      title: 'Passenger Map',
      name: 'RideMap',
      passProps: {}
    });
  }

  onDriverPress() {
    console.log('driving..')

    this.props.navigator.push({
      title: 'Driver Map',
      name: 'RideMap',
      passProps: {}
    });
  }

  border(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }

  render() {
    return (
      <View style={[styles.container, this.border('yellow')]}>
        <View style={[styles.logo, this.border('black')]}>
          <Text style={styles.txtLogo}>xuber</Text>
        </View>

        <View style={[styles.image, this.border('blue')]}>
        </View>

        <View style={[styles.input, this.border('red')]}>
          <Text style={styles.txtName}>Your Name?</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.setState({ userName: text })}
            value={this.state.userName} />
        </View>

        <View style={[styles.buttonContainer, this.border('green')]}>
          <TouchableHighlight style={[this.border('red'), styles.button]}
            onPress={this.onPassengerPress.bind(this)}>
            <Text style={styles.buttontext}>I need a ride</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[this.border('red'), styles.button]}
            onPress={this.onDriverPress.bind(this)}>
            <Text style={styles.buttontext}>Im driving</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};
