import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator1 from './StackNavigator1'
import Home from '../screens/Home';
import Messages from './Messages';
import Profile from './Profile';
const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={StackNavigator1} />
      <Tabs.Screen name="Messages" component={Messages} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};
export default TabsNavigator;