import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View, StatusBar } from 'react-native';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import AppStack from '@/navigator/stack';

const App: React.FC = () => {

  const navigationRef = useNavigationContainerRef();
  useReduxDevToolsExtension(navigationRef);

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <AppStack />
        </NavigationContainer>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      </SafeAreaProvider>
    </>
  )
};

export default App;
