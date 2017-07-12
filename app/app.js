/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const Popup = require('rn-popup');

var list = [
  { title: 'Plaza',
    description: 'Knotel Plaza District is coming soon.' },
  { title: 'Times Square',
    description: 'Knotel Times Square is coming soon.' },
  { title: 'Bryant',
    description: 'Knotel Bryant Park features six floors with both open and private space as well as access to a private roof deck.' },
  { title: 'Park Ave South',
    description: 'Knotel Park Ave South is coming soon.' }
];

import mapStyle from './map.json';

export default class Knotel extends Component {

    constructor(props){
      super(props);

      this.state = {
        isVisible: false,
        index: 0,
        region: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        coordinate1: new MapView.AnimatedRegion({
          latitude: 37.78725,
          longitude: -122.4124,
        }),
        coordinate2: new MapView.AnimatedRegion({
          latitude: 37.78825,
          longitude: -122.4324,
        }),
        coordinate3: new MapView.AnimatedRegion({
          latitude: 37.76825,
          longitude: -122.4124,
        }),
        coordinate4: new MapView.AnimatedRegion({
          latitude: 37.77455,
          longitude: -122.4234,
        }),
      }  

    }

    handlePin = (tag) => {
      this.setState({
        isVisible: true,
        index: tag
      });
    }

    _closePopUp() {
      this.setState({
        isVisible: false
      });
    }

    render() {
      return (
        <View style={styles.container}>
          <MapView style={styles.map}
            region={this.state.region}
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}>   
            <MapView.Marker.Animated 
              coordinate={this.state.coordinate1}
              title={list[0].title}
              description={list[0].description}
              onPress={() => this.handlePin(0)} />              
            <MapView.Marker.Animated 
              coordinate={this.state.coordinate2}
              title={list[1].title}
              description={list[1].description}
              onPress={() => this.handlePin(1)} /> 
            <MapView.Marker.Animated 
              coordinate={this.state.coordinate3}
              title={list[2].title}
              description={list[2].description}
              onPress={() => this.handlePin(2)} /> 
            <MapView.Marker.Animated 
              coordinate={this.state.coordinate4}
              title={list[3].title}
              description={list[3].description}
              onPress={() => this.handlePin(3)} />          
          </MapView>
          <Popup isVisible={this.state.isVisible} duration={500} entry={'bottom'} exit={'top'}>            
            <Text style={styles.titleText}>{list[this.state.index].title}</Text>
            <Text style={styles.descriptionText}>{list[this.state.index].description}</Text>
            <Button textStyle={{textAlign: 'center'}} onPress={() => this._closePopUp()} buttonType='primary' title="Close"></Button>
          </Popup>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5F1AF',
  },
  map: {
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    marginTop: 8,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: 'grey',
    marginTop: 8,
    marginBottom: 30,
  },
});

AppRegistry.registerComponent('Knotel', () => Knotel);
