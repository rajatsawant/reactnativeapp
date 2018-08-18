import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1,flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor:'red', height: 50}} ></View>
        <View style={{flex: 2, backgroundColor:'yellow', height: 50}}></View>
        <View style={{flex: 3, backgroundColor:'green', height: 50}}></View>
      </View>
    );
  }
}
