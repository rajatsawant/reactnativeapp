import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Greetings extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isShowingText: true
    }

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }
  render() {
    let display = this.state.isShowingText ? this.props.name : ''; 
    return (
      <View>
        <Text>{display}</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View style = {styles.container}> 
        <Greetings name = "Rajat" />
        <Greetings name = "Sumedh" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
