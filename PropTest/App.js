import React,{Component, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Alert} from 'react-native';
import CustomButton from './Components/CustomButton';

export default class App extends Component {  
  render() {
 
    var colorsArray = [ "Red", "Blue", "Black", "Purple", "Organge", "Green" ];
    return (
      <View style={styles.container}>
            { colorsArray.map((item, key)=>(

        <CustomButton title={item}  style={{backgroundColor:+'"'+{item}+'"'}}/>)
           
           )}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    justifyContent: 'center',
    alignItems : 'center',
    borderRadius:10,
    margin:50,
  
  },
  buttonText:{
    justifyContent:"center",
    padding: 10,  
    fontSize: 18  ,
  }
});

