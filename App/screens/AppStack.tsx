import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStack} from './screens/MainStack/MainStack';
import {AppStackParams} from './AppNavigationType';
import {AuthStack} from './screens/AuthStack/AuthStack';
import {useAppSelector} from '../store';

const Stack = createStackNavigator<AppStackParams>();

export const AppStack = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

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
