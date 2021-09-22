import React ,{Component}from 'react';
import { Text,View ,ScrollView,Image,StyleSheet} from 'react-native';

export default class ImageTest extends React.Component {  
    render(){
        
    return(
        <View>
        <Image style={styles.profileimage}source={{uri: 'https://reactjs.org/logo-og.png'}}/>
        <Image 
          style={{ width: 100, height: 100, marginBottom: 15 }}
          resizeMode='center'
          source={require("./flower.jpeg")}/>
        </View>)
                
    }
}


const styles = StyleSheet.create({
    profileimage:
{
  height: 100,
  width: 100,
  margin:20,
 justifyContent:"center",
 alignItems:'center',
}
});