import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {  
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Vector Icons</Text>
      <View style={styles.image}>
      <Icon name="android" size={50} color="green"/>
      <Icon name="apple" size={50} color="yellow" />
      <Icon name="amazon" size={30} color="purple" />
      <Icon name="at" size={70} color="orange" />
      <Icon name="archive" size={70} color="blue" />
      
       
      </View>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Title:{
    fontSize: 30,
    textAlign: 'center',
    color: 'purple',
    margin:20
  }
});
