import {useFlipper} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import {AppStack} from './App/screens/AppStack';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
