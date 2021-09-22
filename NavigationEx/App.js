import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import StackNavigator from './screens/StackNavigator';
import TabsNavigator from './screens/TabsNavigator';
//import DrawerNavigator from './screens/DrawerNavigator';
export default function App() {
  return (
    <NavigationContainer>
    
    <TabsNavigator />
     
    </NavigationContainer>
  );
}
//<StackNavigator/>
//<TabsNavigator />
//<DrawerNavigator />

