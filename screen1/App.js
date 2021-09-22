
import React, { Component} from 'react';
import { View,StyleSheet,ImageBackground,SafeAreaView,Image ,TouchableOpacity,Text} from 'react-native';


export default class Screen1 extends Component{
  
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiL6R09H7hZmv3Nq427FaEsSL1JbE1555DQ&usqp=CAU'}}>
        <View style={styles.viewtext}>  
          <Text style={styles.text1}>Hi</Text> 
         <Text style={styles.text}>Network {"\n"}Smater.</Text>  
          </View>
         <Image
        style={styles.profileimage}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnmDZ9sB4ntmz77x8hS500LnzMBkVtuk4gw&usqp=CAU',
        }}
      />

<Image
        style={styles.profileimage1}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnmDZ9sB4ntmz77x8hS500LnzMBkVtuk4gw&usqp=CAU',
        }}
      />
      <Image
        style={styles.profileimage2}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnmDZ9sB4ntmz77x8hS500LnzMBkVtuk4gw&usqp=CAU',
        }}
      />

          </ImageBackground>
          <TouchableOpacity >  
     <View style={styles.button}>  
         <Text style={styles.buttonText}>CREATE ACCOUNT</Text>  
     </View>  
 </TouchableOpacity>  
 <TouchableOpacity >
  <Text style={styles.loginText}>LOG IN </Text>
</TouchableOpacity>
<TouchableOpacity >
  <Text style={styles.loginText}>PRIVACY POLICY </Text>
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
    flexDirection: 'row', justifyContent: 'space-between'
  },
  button: {
    margin:10,
    backgroundColor:'#6c5ce7',
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
loginText:{
  color: '#b3b3ff',
    textAlign: 'center',
    fontSize: 15,
    padding:10,
   
    marginBottom:10
},
text: {
  color: '#fff',
  textAlign: 'right',
  fontSize: 30,
  marginRight:30,
  marginTop:15,  
},

text1: {
  color: '#fff',
  textAlign: 'left',
  fontSize: 30,
  marginLeft:30,
  fontWeight: "bold"
 
},profileimage: 
{
  height: 110,
  width: 100,
  marginLeft:50,
 justifyContent:"center",
 alignItems:'center',
 transform: [{ rotate: '20deg'}],
 borderRadius: 20
 
},profileimage1:
{
  height: 110,
  width: 100,
  marginLeft:220,
  margin:10,
  borderRadius: 20,
  alignItems:'center',
 justifyContent:"center",
 transform: [{ rotate: '20deg'}]
},
profileimage2:
{
  height: 110,
  width: 100,
  marginLeft:90,
  alignItems:'center',
  borderRadius: 20,
 justifyContent:"center",
 transform: [{ rotate: '50deg'}]
}
});