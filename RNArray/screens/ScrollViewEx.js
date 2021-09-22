import React , { Component ,useState}from 'react';
import {View,StyleSheet,Text,Alert,Button, ScrollView}from 'react-native'

export default class App extends Component {

  state = {
    colorNames:[
      {name:"Red",key:1},
      {name:"Blue",key:2},
      {name:"Block",key:3},
      {name:"Purple",key:4},
      {name:"Organge",key:5},
      {name:"Green",key:6},
      {name:"Yellow",key:7},
      {name:"Pink",key:8},
      {name:"olive",key:9},
      {name:"lime",key:10},
    ]
  }
 render() {
   return (
     <View style={styles.MainContainer}>
       <ScrollView>
        {
          this.state.colorNames.map((item,index)=>(
              <View key={item.id} style={styles.listItem}>
                <Text style={styles.textvalues}>{item.name}</Text>
                </View>
          ))}
 </ScrollView>
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
 
 MainContainer: {
   flex: 1,
   margin: 20
 },
 listItem:{
   backgroundColor:"pink",
   margin:10,
   borderRadius:20
 },
 textvalues:{
   padding:20,
    fontSize:20
 }
 
});