import React,{Component, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Alert} from 'react-native';


export default class CustomButton extends Component{
    constructor (props) {
        super(props)
        this.state = {
          title: '',
        }
     }

    onPressButton=()=> {  
        Alert.alert("Button Clicked : "+ (this.props.title) );
        } 

  render(){
  return(
    <TouchableOpacity
    onPress={this.onPressButton}
    style={this.props.style}
  >
    <Text style={styles.buttonText}>
      {this.props.title}  
    </Text>
  </TouchableOpacity>
  );
  }
}

const styles = StyleSheet.create({
   
    buttonText:{
      justifyContent:"center",
      padding: 10,  
      fontSize: 18  ,
    }
  });
  
  