import React ,{Component}from 'react';
import { Text,View ,ScrollView,Image,StyleSheet} from 'react-native';
import data from './data';


export default class ScollViewTest extends React.Component {  
    render(){
        
    return(
        <ScrollView horizontal={true} style={{marginVertical:20}} >
            {
                data.map(item=><View key={item.id} style={{marginVertical:10, padding:20}}>
                    <Text>{item.title}</Text>
                    <Text>Completed : {item.completed}</Text>
                  <Image style={styles.profileimage}source={{uri: 'https://reactjs.org/logo-og.png'}}/>
                   <Image 
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require("./flower.jpeg")}
        />
                </View>)
                
            }

       
        </ScrollView>
    )
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