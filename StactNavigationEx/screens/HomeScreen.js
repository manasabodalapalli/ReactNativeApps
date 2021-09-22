import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const HomeScreen = ({navigation}) => {

    const [userName, setUserName] = useState('enter details');

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}> Enter the UserName: </Text>

        <TextInput
        style={styles.input} 
        onChangeText={(username) => setUserName(username)}
        underlineColorAndroid = "transparent"
        placeholder={'Enter Any value'}
        value = {userName}
      />
           <Button title="login"
        onPress={()=> navigation.navigate('DetailsScreen', {
            paramKey: userName})}></Button>
      </View>
    );
  };

  export default HomeScreen;


  const styles = StyleSheet.create({
    container:{
     flex:1,
    },
    text:{
        padding: 10, 
        fontSize: 20
           
    },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        borderRadius:5
      },
    
});