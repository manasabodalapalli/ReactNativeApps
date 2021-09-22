import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './screens/DrawerNavigator';
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}