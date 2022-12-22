import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParams} from './MainStackNavigationType';
import {HomeScreen} from './Screens/HomeScreen';
import {MoreScreen} from './Screens/MoreScreen';
import {TodosScreen} from './Screens/TodosScreen';
import {PostsScreen} from './Screens/PostsScreen';
import {TodoDetailsScreen} from './Screens/TodoDetailsScreen';

const Stack = createStackNavigator<MainStackParams>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MoreScreen" component={MoreScreen} />
      <Stack.Screen name="TodosScreen" component={TodosScreen} />
      <Stack.Screen name="PostsScreen" component={PostsScreen} />
      <Stack.Screen name="TodoDetailsScreen" component={TodoDetailsScreen} />
    </Stack.Navigator>
  );
};
