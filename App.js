import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={{
          padding:10,
          marginTop: 50
        }}>
        <TextInput
          style={{height:40}}
          placeholder = "Hello, please type here"
          onChangeText = {(text) => this.setState({text})}
        />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}
