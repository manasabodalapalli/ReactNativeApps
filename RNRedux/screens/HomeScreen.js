import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setName,setAge } from '../redux/actions';

const HomeScreen = ({navigation}) => {

    const {name,age} = useSelector(state=>state.userReducer)
    const dispatch = useDispatch();


    //const [userName, setUserName] = useState('');
    //const [age, setAge] = useState(0);

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}> Redux</Text>

        <TextInput
        style={styles.input} 
        onChangeText={(name) => dispatch(setName(name))}
        underlineColorAndroid = "transparent"
        placeholder={'Enter the Name'}
        value = {name}
      />

        <TextInput
        style={styles.input} 
        onChangeText={(age) => dispatch(setName(age))}
        underlineColorAndroid = "transparent"
        placeholder={'Enter the Age'}
        keyboardType='numeric'
        value = {age}
      />
           <Button title="login"
        onPress={()=> navigation.navigate('DetailsScreen')}></Button>
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