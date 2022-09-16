import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Cadastro from '../screen/Cadastro';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#ee125a',
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
