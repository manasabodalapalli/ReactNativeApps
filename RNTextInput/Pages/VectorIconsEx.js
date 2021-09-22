import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {  
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Vector Icons</Text>

      <Icon name="rocket" size={50} color="#900" />

      <Icon name="amazon" size={50} color="#900" />
       
      <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook}
  >
    Login with Facebook
  </Icon.Button>
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
  Title:{
    fontSize: 18,
    textAlign: 'center',
    color: 'purple',
    margin:20
  }
});
