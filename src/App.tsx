import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>This will be the best wine app ever!</Text>
      </View>
    );
  }
}

const TasteApp = StackNavigator({
  Home: { screen: HomeScreen }
});

AppRegistry.registerComponent('WineApp', () => TasteApp);