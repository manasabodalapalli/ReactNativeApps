import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Messages from './Messages';
import Profile from './Profile';
import Cart from '../screens/Cart';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => <Icon name="home" color="#333" size={20} />,
      }}/>
      <Tabs.Screen name="Messages" component={Messages} 
      options={{
        tabBarLabel: 'Messages',
        tabBarIcon: () => <Icon name="comment" color="#333" size={20} />,
      }}/>
      <Tabs.Screen name="Profile" component={Profile} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => <Icon name="user" color="#333" size={20} />,
      }}/>
    </Tabs.Navigator> 
  );
};
export default TabsNavigator;