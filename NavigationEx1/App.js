import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import StackNavigator from './screens/StackNavigator';
//import TabsNavigator from './screens/TabsNavigator';
import DrawerNavigator from './screens/DrawerNavigator';
import 'react-native-gesture-handler';
export default function App() {
  return (
    <NavigationContainer>
   <DrawerNavigator />
    </NavigationContainer>
  );
}

//<StackNavigator/>
//<TabsNavigator />
//<DrawerNavigator />
