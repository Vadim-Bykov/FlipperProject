import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStack} from './screens/MainStack/MainStack';
import {AppStackParams} from './AppNavigationType';
import {AuthStack} from './screens/AuthStack/AuthStack';

const Stack = createStackNavigator<AppStackParams>();

export const AppStack = () => {
  const isLoggedIn = true;

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen name="MainStack" component={MainStack} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};
