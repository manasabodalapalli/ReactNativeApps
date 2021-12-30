import React, {Component} from 'react';
import {View, Text, StyleSheet,Switch} from 'react-native';
import CardViewEx from './CardViewEx';

export default class App extends Component {  

  render(){
  return (
    <View style={styles.container}>
      <CardViewEx> </CardViewEx>
      </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
