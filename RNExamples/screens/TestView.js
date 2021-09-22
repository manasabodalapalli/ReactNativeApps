import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const TestView = ({}) => {

    
   return (
    <View style={styles.container}>  
    <View style={{backgroundColor: 'blue', flex: 0.3}} />  
    <View style={{backgroundColor: 'red', flex: 0.5}} />  
    <Text style={{fontSize: 18}}>View Example</Text>  
</View>  
    );
  };

  export default TestView;


  const styles = StyleSheet.create ({  
    container: {  
        flex: 1,  
        flexDirection: 'column',  
        height: 100,  
        width: "80%",  
        backgroundColor:"#5ead97"  
    }  
})  