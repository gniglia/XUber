import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const RideMap = () => {
  return (
    <View style={styles.container}>
      <Text>
        Holaaa mapa de pasajero
      </Text>
    </View>
  );
};

export default RideMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  }
})
