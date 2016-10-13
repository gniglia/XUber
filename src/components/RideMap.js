import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  MapView,
  TouchableHighlight,
  ActivityIndicator,
  Modal
} from 'react-native';
var styles = require('../styles/styles');

export default class RideMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      showModal: false,
      showPickUp: true
    }
  }

  setModalVisibility(show) {
    this.setState({ showModal: show })
  }

  setPickUpVisibility(show) {
    this.setState({ showPickUp: show })
  }

  onRequest() {
    this.setState({ animating: true });
    setTimeout(() => {
      this.setState({ animating: false });
      this.setModalVisibility(true);
    }, 1000);
  }

  onModalClose() {
    console.log('cerramo');
    this.setModalVisibility(false);
    this.setPickUpVisibility(false);
  }

  gotIt() {
    this.props.navigator.replace({
      name: 'Register',
      passProps: {}
    });
  }

  showButtons() {
    console.log('pasoooo');
    if (this.state.showPickUp) {
      return (
        <TouchableHighlight onPress={this.onRequest.bind(this)}>
          <View>
            <Text style={{fontSize:18, color:'#264762'}}>Request Pick up</Text>
          </View>
        </TouchableHighlight>
      )
    }
    return (
      <TouchableHighlight onPress={this.gotIt.bind(this)}>
        <View>
          <Text style={{fontSize:18, color:'#F42156'}}>{'       GOT IT!'}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const modalBackgroundStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    };
    const innerContainerTransparentStyle = {
      backgroundColor: '#fff',
      padding: 20
    };

    return (
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.showModal}
          >
          <View style={[styles.modalContainer, modalBackgroundStyle]}>
            <View style={[styles.modalInnerContainer, innerContainerTransparentStyle]}>
              <View style={{flex: 3}}>
                <Text>Name: Pepe</Text>
                <Text>ETA: 6 minutes</Text>
              </View>
              <View style={{flex: 1}}>
                <TouchableHighlight
                  onPress={this.onModalClose.bind(this)}>
                  <Text style={{color: '#264762'}}>Close</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            showsUserLocation={true}
            region={{
              latitude: -36.8594592,
              longitude: 174.7830875,
              latitudeDelta: 0.010,
              longitudeDelta: 0.070
            }}
            annotations={[
            {
              latitude: -36.874775,
              longitude: 174.784367,
              title: 'pepe',
              image: require('./car.png')
            },
            {
              latitude: -36.8584732,
              longitude: 174.7881418,
              title: 'pepe',
              image: require('./car.png')
            },
            {
              latitude: -36.852080,
              longitude: 174.814806,
              title: 'pepe',
              image: require('./car.png')
            },
            {
              latitude: -36.84850,
              longitude: 174.765332,
              title: 'pepe',
              image: require('./car.png')
            },
            {
              latitude: -36.868491,
              longitude: 174.778032,
              title: 'Me'
            }
            ]}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={{flex:2, alignItems: 'flex-end'}}>
            <ActivityIndicator
              size='large'
              style={{padding: 8}}
              animating={this.state.animating} />
          </View>
          <View style={{flex:5}}>
            {this.showButtons()}
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65
  },
  mapContainer: {
    flex:12
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalInnerContainer: {
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
  },
})
