import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

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

        <View style={[styles.buttons, this.border('green')]}>
          <TouchableHighlight
            onPress={this.onPassengerPress.bind(this)}>
            <Text style={styles.buttontext}>I need a ride</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.onDriverPress.bind(this)}>
            <Text style={styles.buttontext}>Im driving</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtLogo: {
    fontSize: 40
  },
  image: {
    flex: 6
  },
  input: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtName: {

  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttontext: {
    color: 'blue'
  }
});
