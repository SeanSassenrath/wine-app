import React, { Component, PropTypes } from 'react';
import {
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

interface CircleButtonProps {
  onPress(): void;
}

export class CircleButton extends Component<CircleButtonProps, {}> {

  static propTypes = {
    onPress: PropTypes.func
  };

  render() {
    let { onPress } = this.props;
    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor='transparent'
      >
        <View style={styles.button}>
          { this.props.children }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderColor: '#A04668',
    backgroundColor: '#A04668',
    borderRadius: 110,
    padding: 5,
    borderWidth: 10,
    height: 220,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 30
    },
    shadowRadius: 30,
    shadowOpacity: .1
  }
});