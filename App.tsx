import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {AppStack} from './App/screens/AppStack';
import {appStore} from './App/store';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);

  return (
    <Provider store={appStore}>
      <NavigationContainer ref={navigationRef}>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
