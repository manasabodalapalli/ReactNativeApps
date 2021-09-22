import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator'
import Messages from './Messages';
import Profile from './Profile';
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          title: 'Main',
          headerStyle: {
            backgroundColor: '#09f',
          },
        }}
      />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
export default StackNavigator;