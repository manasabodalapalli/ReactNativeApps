
import React, { Component} from 'react';
import { View,StyleSheet,TextInput,SafeAreaView,Image ,TouchableOpacity,Text} from 'react-native';


export default class Screen2 extends Component{
  
  render(){
    return(
      <SafeAreaView style={styles.container}>
 
        <View style={styles.viewtext}>  
                  <Text style={styles.text}>To reset your password, please {"\n"} enter your email.</Text> 
        <View style={styles.viewtextinput}>  
          <Text style={styles.text1}>Email</Text> 

          <View style={styles.viewtextinput1}>  
          <Image
        style={styles.imgmail}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidHSbbPDWQSX79S42EILHwFTvO-0WRRfnpA&usqp=CAU',
        }}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid = "transparent" 
       />
      </View>
      </View>

<TouchableOpacity >  
     <View style={styles.button}>  
         <Text style={styles.buttonText}>SEND  ME  A  PASSWORD  RESET {"\n"}LINK</Text>  
     </View>  
 </TouchableOpacity>  
           </View>    
      </SafeAreaView>
          );
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor: "white",
  },
 
  input: {
    height: 40,
    width:250,
    marginBottom:50,
    marginLeft:10,
    justifyContent:"center",
    color:'black',
    paddingBottom:10,

  },
  viewtext:{
    marginTop:70,
    width: '100%',
    height: 400,
    alignSelf: 'auto',
    justifyContent:"center",
    alignItems:'center',
    backgroundColor: "white",
    borderRadius:10
  },

  viewtextinput:{
    
    width: 300,
    height: 60,
    alignSelf: 'auto',
    backgroundColor: "#F0F8FF",
    borderRadius:5,
    borderBottomWidth:2,
    borderBottomColor:'#6c5ce7'
  },
  viewtextinput1:{
    justifyContent: "flex-end",
    flexDirection: "row",
    marginBottom:10
  },
  button: {  
    margin:15,
    height:60,
    width:300,
    backgroundColor:'#E6E6FA',
    borderRadius:10,
    alignItems: 'center', 
    justifyContent:'center',
    alignSelf: 'auto'
},
buttonText: {
  color: '#fff',
  textAlign: 'center',
  fontSize: 15,
  padding:10,
},

text: {
  margin:30,
  textAlign: 'center',
  fontSize: 20,
  color:'#696969',
  marginRight:30,
  marginTop:15,  
},

text1: {
  color: '#6c5ce7',
  textAlign: 'left',
  fontSize: 15,
  marginLeft:50,
  paddingTop:10
},

imgmail: 
{
  height: 25,
  width: 25,
  marginBottom:10,
  marginLeft:10,
 borderRadius: 20
}
});