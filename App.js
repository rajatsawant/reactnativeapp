import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{
          flex:1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems:'center'
        }}>
        <View style={{backgroundColor:'red', height: 50, width: 50}} ></View>
        <View style={{backgroundColor:'yellow', height: 50, width: 50}}></View>
        <View style={{backgroundColor:'green', height: 50, width: 50}}></View>
      </View>
    );
  }
}
