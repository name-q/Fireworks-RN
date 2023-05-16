import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View, StatusBar } from 'react-native';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

const App: React.FC = () => {

  const navigationRef = useNavigationContainerRef();
  useReduxDevToolsExtension(navigationRef);

  return (
    <View>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
        </NavigationContainer>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      </SafeAreaProvider>
    </View>
  )
};

export default App;
