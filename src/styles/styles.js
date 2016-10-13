'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'deepskyblue',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },

  buttontext: {
    color: 'white'
  }
});
