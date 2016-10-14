import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  MapView,
  TouchableHighlight,
  ActivityIndicator,
  Modal,
  Image
} from 'react-native';
var styles = require('../styles/styles');

export default class DriverMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true,
      showModal: false,
      people: [
        {
          _id: 1,
          latitude: -36.8584732,
          longitude: 174.7881418,
          title: 'John',
          image: require('../images/xero_logo_1.png')
        },
        {
          _id: 2,
          latitude: -36.852080,
          longitude: 174.814806,
          title: 'Linda',
          image: require('../images/xero_logo_1.png')
        },
        {
          _id: 3,
          latitude: -36.84850,
          longitude: 174.765332,
          title: 'Elaine',
          image: require('../images/xero_logo_1.png')
        },
        {
          _id: 4,
          latitude: -36.874775,
          longitude: 174.784367,
          title: 'Peter',
          image: require('./car.png')
        },
        {
          _id: 5,
          latitude: -36.868491,
          longitude: 174.778032,
          title: 'Elaine',
          image: require('../images/xero_logo_1.png')
        }
      ]
    }
  }

  setModalVisibility(show) {
    this.setState({ showModal: show })
  }

  closeModal() {
    this.setModalVisibility(false);
  }

  gotIt() {
    this.props.navigator.replace({
      name: 'Register',
      passProps: {}
    });
  }

  setPeople() {
    this.setState({people: this.state.people.filter(people => people._id > 3)});
  }

  onResponse(pickup) {
    if (pickup) {
      this.setState({ animating: false});
      this.setPeople();
    }
    this.closeModal();
  }

  render() {
    const modalBackgroundStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    };
    const innerContainerTransparentStyle = {
      backgroundColor: '#fff',
      padding: 20
    };

    const timeout = setTimeout(() => {
        this.setModalVisibility(true);
      }, 6000);

    console.log('animating', this.state.animating)

    if (!this.state.animating) {
      clearTimeout(timeout);
    }

    return (
      <View style={styles.containerDriverMap}>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.showModal}
          >
          <View style={[styles.modalContainer, modalBackgroundStyle]}>
            <View style={[styles.modalInnerContainer, innerContainerTransparentStyle]}>
              <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <View>
                  <Image
                    source={require('../images/avatar_jerry.png')}
                    />
                </View>
                <View style={{flex: 3}}>
                  <Text>Elaine Seinfeld - Sales & Marketing</Text>
                  <Text>ETA: 12min</Text>
                </View>

                <View style={[styles.buttonContainer]}>
                  <TouchableHighlight style={[styles.button]}
                    onPress={() => {
                      this.onResponse(false)
                    }}>
                    <Text style={{color: '#264762'}}>No :(</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.button]}
                    onPress={() => {
                      this.onResponse(true)
                    }}>
                    <Text style={{color: '#264762'}}>Yes :)</Text>
                  </TouchableHighlight>
                </View>
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
            annotations={this.state.people}
          />
        </View>
      </View>
    );
  }
};
