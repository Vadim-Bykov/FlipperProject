import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackParams} from './AuthStackNavigationType';
import {LoginScreen} from './Screens/LoginScreen';
import {RegistrationScreen} from './Screens/RegistrationScreen';

const Stack = createStackNavigator<AuthStackParams>();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};
