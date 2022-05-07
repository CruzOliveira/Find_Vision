import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../component/Login'
import Cadastro from '../component/Cadastro'

const Stack =createNativeStackNavigator();

export const MainStackNavigator =() => {
    return(
        <Stack.Navigator initialRouteName='Login'
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor:'#ee125a',
                }
            }}>
            <Stack.Screen name='Login' component={Login}
                options={{headerShown: false }}/>
            <Stack.Screen name='Cadastrar' component={Cadastro}
                options={{headerShown: false }}/>
        </Stack.Navigator>
)};
