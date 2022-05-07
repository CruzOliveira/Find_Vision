import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './src/navigation/StackNavagators'

const App = () => {
  return(
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;

