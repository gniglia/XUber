import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';



export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' };
  }

  onPassengerPress() {
    console.log('passenger..')

    this.props.navigator.push({
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
      borderWidth: 0
    }
  }

  render() {
    return (
      <Image
        source={{uri: 'https://images.unsplash.com/photo-1453856908826-6bbeda0f8490?dpr=1&auto=format&crop=entropy&fit=crop&w=767&h=1152&q=80&cs=tinysrgb'}}
        style={styles.container}>
      <View style={[styles.container, this.border('yellow')]}>
        <View style={[styles.logo, this.border('black')]}>
          <Text style={styles.txtLogo}>xuber</Text>
        </View>

        <View style={[styles.image, this.border('blue')]}>
        </View>

        <View style={[styles.input, this.border('red')]}>
          <Text style={styles.txtName}>Your Name?</Text>
          <TextInput
          keyboardType='numeric'
            style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#eeeeee'}}
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
      </Image>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
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
    flex: 7
  },
  input: {
    flex: 2,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtName: {
    color: 'white'
  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttontext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
