import React, { useEffect } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { msg } from 'react-native-tools-next';
import SplashScreen from 'react-native-splash-screen'
import { Provider as AntdProvider } from '@ant-design/react-native';
import { Provider as ReduxProvider } from 'react-redux';

import SYSTEM from '@/config/system'
import AppStack from '@/navigator/stack';
import store from '@/redux/store';
import Tts from 'react-native-tts';
import '@/utils/react-native-debug-hermes-hook'

const App: React.FC = () => {

  const navigationRef = useNavigationContainerRef();
  useReduxDevToolsExtension(navigationRef);
  /**
   * 公共路由处理方案
   */
  // 返回上一页
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
    // 还有一些方法先不写了 等用到再更 目前觉得够用
    // https://reactnavigation.org/docs/navigation-actions
    // https://reactnavigation.org/docs/stack-actions
    // https://reactnavigation.org/docs/tab-actions
    // 值得注意的是：reset方法会使根路由得以goback

    // DEBUG
    // setInterval(()=>{
    //   msg.emit('router:GoBack')
    // },3000)

    // 隐藏启动屏
    let hideSplashScreen = setTimeout(() => {
      SplashScreen.hide();
    }, SYSTEM.hideSplashScreenTimeSSS)
    return () => {
      routerGoBackMsg.remove()
      clearTimeout(hideSplashScreen)
    }
  }, [])

  // 监听全局路由变化
  const onStateChange = () => {
    // 关闭语音播报
    Tts.stop()
  }

  return (
    <ReduxProvider store={store}>
      <AntdProvider>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
            <AppStack />
          </NavigationContainer>
          <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
        </SafeAreaProvider>
      </AntdProvider>
    </ReduxProvider>
  )
};

export default App;
