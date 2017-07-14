import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { CircleButton } from '../components/CircleButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#903f5d',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    margin: 50
  },
  buttonTextSmall: {
    fontSize: 18,
    color: 'white',
    opacity: .9
  },
  buttonTextLarge: {
    fontSize: 45,
    color: 'white',
    opacity: .9
  }
});

export class HomeScreen extends Component<{}, {}> {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <CircleButton onPress={() => console.log('hi')}>
          <Text style={styles.buttonTextSmall}>{'Build My'.toUpperCase()}</Text>
          <Text style={styles.buttonTextLarge}>{'Trip'.toUpperCase()}</Text>
        </CircleButton>
      </View>
    );
  }
}

// interface HomeScreenProps {
//   navigator: any; // No types for React Native Navigation
// }

// export default class HomeScreen extends Component<HomeScreenProps, {}> {

//   constructor(props) {
//     super(props);
//     this.goToSecondTab = this.goToSecondTab.bind(this);
//   }

//   goToSecondTab(): void {
//     this.props.navigator.push({ screen: 'example.SecondTabScreen'});
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native Page 1!
//         </Text>
//         <Text style={styles.instructions}>
//           This is page one.
//         </Text>
//         <Button title='click me' onPress={this.goToSecondTab}>Click me</Button>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   }
// });