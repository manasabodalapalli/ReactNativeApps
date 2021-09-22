import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Messages from './Messages';
import Profile from './Profile';
import Cart from './Cart';
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
export default StackNavigator;