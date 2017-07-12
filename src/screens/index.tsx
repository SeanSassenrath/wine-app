import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import SecondTabScreen from './SecondTabScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('taste.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
}