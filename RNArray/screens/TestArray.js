import React , { Component }from 'react';
import {View,StyleSheet,Text,Alert,Button}from 'react-native'

export default class App extends Component {
 
  SampleFunction=(item)=>{
 
    Alert.alert(item);
 
  }
 
 render() {
 
  var SampleNameArray = [ "Red", "Blue", "Block", "Purple", "Organge", "Green" ];
 
   return (
     <View style={styles.MainContainer}>
 
         { SampleNameArray.map((item, key)=>(
           
         <Button title={item} style={styles.ButtonStyle} onPress={ this.SampleFunction.bind(this, item) }> </Button>)
     
         )}
 
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
 
 MainContainer: {
   flex: 1,
   margin: 20
   
 },
 
 ButtonStyle:{
   fontSize : 25,
    textAlign: 'center',
    padding :5,
    margin:10
 }
 
});