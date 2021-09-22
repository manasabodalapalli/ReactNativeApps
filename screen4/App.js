
import React, { Component} from 'react';
import { View,StyleSheet,ImageBackground,SafeAreaView,Image ,TouchableOpacity,Text} from 'react-native';


export default class Screen4 extends Component{
  
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiL6R09H7hZmv3Nq427FaEsSL1JbE1555DQ&usqp=CAU'}}>
        <View style={styles.viewtext}>  
         <Text style={styles.text}>Create a business card for</Text> 
         <Text style={styles.text1}>every situation</Text>  
          </View>
         <Image
        style={styles.profileimage}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnmDZ9sB4ntmz77x8hS500LnzMBkVtuk4gw&usqp=CAU',
        }}
      />    
          </ImageBackground>
      <TouchableOpacity >  
        <View style={styles.button}>  
         <Text style={styles.buttonText}>CREATE MY CARDS</Text>  
        </View>  
      </TouchableOpacity>  
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
  viewtext:{
    justifyContent:"center",
  },
  button: {
    width:310,
    marginBottom:50,
    backgroundColor:'#6c5ce7',
    borderRadius:10,
    alignItems: 'center', 
    justifyContent:'center',
    alignSelf: 'center'
},
buttonText: {
  color: '#fff',
  textAlign: 'center',
  fontSize: 15,
  padding:10,
},

text: {
  marginTop:50,
  fontFamily:'Lucida Console',
  textAlign: 'center',
  justifyContent:"center",
  fontSize: 22,
  color:'white',
  fontWeight:'bold',
  paddingTop:5
},

text1: {
  fontFamily:'Lucida Console',
  textAlign: 'center',
  justifyContent:"center",
  fontSize: 22,
  color:'white',
  fontWeight:'bold',
  
},

profileimage: 
{
  height: 250,
  width: 150,
  marginLeft:150,
  marginTop:70,
  marginBottom:80,
  justifyContent:"center",
  alignItems:'center',
  transform: [{ rotate: '170deg'}],
  borderRadius: 20
}
});