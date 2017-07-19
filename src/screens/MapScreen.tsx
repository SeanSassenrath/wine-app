import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Polyline from '@mapbox/polyline';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface MapScreenState {
  coords: any;
}

export class MapScreen extends React.Component<{}, MapScreenState> {
  constructor(props) {
    super(props);

    this.state = {
      coords: []
    };
  }

    componentDidMount() {
    // find your origin and destination point coordinates and pass it to our method.
    // I am using Bursa,TR -> Istanbul,TR for this example
    this.getDirections('38.454979, -122.373345', '38.4053712, -122.3322907');
  }

  // fetch directions and decode polylines
  async getDirections(startLoc, destinationLoc) {
    const gmapsRootUrl = 'https://maps.googleapis.com/maps/api/directions/json?';
    const waypoint = '38.4584679, -122.4231375';
      try {
          let resp = await fetch(`${ gmapsRootUrl }origin=${ startLoc }&destination=${ destinationLoc }&waypoints=${ waypoint }&key=AIzaSyBU3SielVQ7bSWrm60u2p36fIPhlf4CzZo`);
          let respJson = await resp.json();
          let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
          let coords = points.map((point) => {
              return  {
                  latitude : point[0],
                  longitude : point[1]
              };
          });
          this.setState({coords: coords});
          return coords;
      } catch (error) {
          return error;
      }
  }

  render() {
    const waypoints = [
      {latLng: {latitude: 38.454979, longitude: -122.373345}},
      {latLng: {latitude: 38.4053712, longitude: -122.3322907}},
      {latLng: {latitude: 38.4584679, longitude: -122.4231375}}
    ];
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'green', height: 100, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Some div</Text>
        </View>
        <View style={styles.container}>
          <MapView.Animated
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: 38.4053712,
              longitude: -122.3322907,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            {
              waypoints.map(waypoint => (
                <MapView.Marker
                  coordinate={waypoint.latLng}
                />
              ))
            }
            <MapView.Polyline
              coordinates={this.state.coords}
              strokeWidth={2}
              strokeColor='red'
            />
          </MapView.Animated>
        </View>
      </View>
    );
  }
}

// GoogleMapPlayground.propTypes = {
//   provider: MapView.ProviderPropType,
// };

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject as any
  },
  map: {
    ...StyleSheet.absoluteFillObject as any
  }
});