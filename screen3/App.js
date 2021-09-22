
import React, { Component} from 'react';
import { View,StyleSheet,SafeAreaView,Image ,TouchableOpacity,Text} from 'react-native';


export default class Screen3 extends Component{
  
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.viewtext}>  
                  <Text style={styles.text}>We sent you a link to reset your{"\n"}password.</Text> 
          <Image
        style={styles.imgmail}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTzXdSkBVeAjmzh0-INeM5iullxWSskogLw&usqp=CAU',
        }}
      />
      <Text style={styles.text1}>If an account associated with parimala{"\n"}.ce@gmail.com exists, you will receive a link to{"\n"} reset your password.</Text> 

           </View>  
           <TouchableOpacity >
  <Text style={styles.loginText}>RESEND LINK</Text>
</TouchableOpacity>  
      </SafeAreaView>
          );
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor: "white",
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

  loginText:{
    color: '#b3b3ff',
      textAlign: 'center',
      fontSize: 16,
      padding:10,
      marginTop:80
  },

text: {
  fontFamily:'Lucida Console',
  margin:15,
  textAlign: 'center',
  fontSize: 20,
  color:'#696969',
  marginRight:30,
  marginTop:15,  
},

text1: {
  fontFamily:'Lucida Console',
  color: '#696969',
  textAlign: 'center',
  fontSize: 15,
  paddingTop:10
},

imgmail: 
{
  width: 120,
    height: 120,
  marginBottom:5,
  marginLeft:10,
}
});