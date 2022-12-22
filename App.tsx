import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {configureAxios} from './App/api/axiosConfig';
import {AppStack} from './App/screens/AppStack';
import {appStore} from './App/store';

configureAxios();

const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

const App = () => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={appStore}>
        <NavigationContainer ref={navigationRef}>
          <AppStack />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
