import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParams} from './MainStackNavigationType';
import {HomeScreen} from './Screens/HomeScreen';
import {MoreScreen} from './Screens/MoreScreen';

const Stack = createStackNavigator<MainStackParams>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MoreScreen" component={MoreScreen} />
    </Stack.Navigator>
  );
};
