
import React, { Component} from 'react';
import { View,StyleSheet,Button,ImageBackground,SafeAreaView,TextInput,Image ,TouchableOpacity,
Text,Alert} from 'react-native';


export default class TestApp extends Component{
  constructer(){
  this.state = {
    username: '',
    password: ''
 }
}

 _onPressButton=()=> {  
const  username = this.state.username;
const  password = this.state.password;
  Alert.alert('UserName:'+username +" , Password: "+password) ;
}   
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg'}}>
       
        <View style = {styles.container1}>
        <Image
        style={styles.profileimage}
        source={{
          uri: 'https://reactjs.org/logo-og.png',
        }}
      />

        <TextInput
        style={styles.input}
        onChangeText={(value) =>this.setState({ username: value })}
        underlineColorAndroid = "transparent"
        placeholder = "UserName"
      />

<TextInput
        style={styles.input}
        onChangeText={(value) =>this.setState({ password: value })}
        underlineColorAndroid = "transparent"
        placeholder = "Password"
      />
        
        <TouchableOpacity onPress={this._onPressButton}>  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>Login</Text>  
                    </View>  
                </TouchableOpacity>  

          </View>
          </ImageBackground>
      </SafeAreaView>
          );
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1
  },
  imgBackground:{
    flex:1,
    justifyContent:"center",
    width: '100%',
    height: '100%'
  },
  container1:{
    width: 300,
    height: 400,
    margin:30,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor: "white",
    borderRadius:10
     },
     
      input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        borderRadius:5
      },
    
      button:{
      marginTop:10,
      width: 250,
      backgroundColor:'deepskyblue',
      borderRadius:5,
      alignItems: 'center',  
},
profileimage:
{
  height: 100,
  width: 100,
  margin:20,
 justifyContent:"center",
 alignItems:'center',
},
buttonText:{
  justifyContent:"center",
  padding: 10,  
        color: 'white',  
        fontSize: 18  
}
});