import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import StackNavigator from './screens/StackNavigator';
import TabsNavigator1 from './screens/TabsNavigator1';
//import DrawerNavigator from './screens/DrawerNavigator';
export default function App() {
  return (
    <NavigationContainer>
    
    <TabsNavigator1 />
     
    </NavigationContainer>
  );
}
//<StackNavigator/>
//<TabsNavigator />
//<DrawerNavigator />

