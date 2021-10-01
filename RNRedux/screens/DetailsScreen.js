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

const DetailsScreen = ({route}) => {

  const {name,age} = useSelector(state=>state.userReducer)
  const dispatch = useDispatch();

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailsScreen</Text>
        <Text>{route.name}</Text>

        
        
        <Text>UserName : {this.dispatch.name}</Text>
        <Text>Age : {this.dispatch.age}</Text>
           
      </View>
    );
  };  

  export default DetailsScreen;