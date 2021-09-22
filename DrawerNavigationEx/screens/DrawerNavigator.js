import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Cart from './Cart';
//import Icon from 'react-native-vector-icons/FontAwesome';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}
       />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
    
  );
};
export default DrawerNavigator;