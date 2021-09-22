
import React, { Component } from 'react';
import { View,Text ,StyleSheet,Button} from 'react-native';


export default class TestApp extends Component{
    constructor(){
      super();
      this.state = {
        data:"this is state"
      } 
    }

  render(){
    return(
     
      <View style = {styles.container}>
      <Text style={{fontSize:20,backgroundColor:'red',width:300,justifyContent:'center',
                textAlign:'center'}}>This first APP </Text>
        <Text style={{fontSize:40}}>{this.state.data}</Text>
        <Button title="Click" onPress={()=>{this.setState({data:"this is newstate"})}}></Button>
      </View>
          );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"lightblue",
    justifyContent:"center",
   margin:15 ,
   // marginRight:15,
    marginTop:100,
  borderRadius:10,
   height:400,
   //width:300

  },
  button1:{
   
        width: 50
    
       
  }
});