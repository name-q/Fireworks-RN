import React, { useEffect } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View, StatusBar } from 'react-native';

import AppStack from '@/navigator/stack';

import { NavigationContainer, StackActions, useNavigationContainerRef } from '@react-navigation/native';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { msg } from 'react-native-tools-next';

const App: React.FC = () => {

  const navigationRef = useNavigationContainerRef();
  useReduxDevToolsExtension(navigationRef);
  /**
   * 公共路由处理方案
   */
  const routerGoBack = () => {
    navigationRef.canGoBack() && navigationRef.goBack()
  }


  useEffect(() => {
    /**
     * 挂载公共路由处理方案
     * TODO： 这种处理方式并不完美 他丢失了ts中对路由的提示
     * 后期考虑保留此处挂载 在utils中再包装📦msg.emit方法
     * 实现路由提示🔔
     */
    const routerGoBackMsg = msg.on('router:GoBack', routerGoBack)

    // DEBUG
    // setInterval(()=>{
    //   msg.emit('router:GoBack')
    // },3000)

    return () => {
      routerGoBackMsg.remove()
    }
  }, [])

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
