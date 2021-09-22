import React,{Component, useState } from 'react';
import {View,Text, StyleSheet,TextInput, TouchableOpacity,Button,Alert} from 'react-native';






const ShowText = ({ onPress, title, customStyles }) => {
    const defaultStyles = {
      height: 60,
      borderRadius: 5,
    }
    return (
      <Button
        title={title}
        onPress={onPress} 
        buttonStyle={[defaultStyles, customStyles]}
      />
  )
  };
  
  export default ShowText;

  <ShowText 
    title='Add details'
    onPress ={() => this.props.navigation.navigate('Create')}
    customStyles={{backgroundColor: '#FF9800'}}
/>
  