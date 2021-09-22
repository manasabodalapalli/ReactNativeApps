import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const DetailsScreen = ({route}) => {

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailsScreen</Text>
        <Text>{route.name}</Text>
        
        <Text>UserName : {route.params.paramKey}</Text>
           
      </View>
    );
  };  

  export default DetailsScreen;