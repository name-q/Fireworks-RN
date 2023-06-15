import { NativeModules, DevSettings } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const withAsyncStorage = async () => {
  const message = {
    stop: 'Stop Debugging',
    debug: 'Debug JS Remotely',
  };
  const storageKey = '@RNDS/isDebuggingRemotely';
  const isDebuggingRemotelyString = await AsyncStorage.getItem(storageKey);
  let isDebuggingRemotely = isDebuggingRemotelyString === 'true';
  DevSettings.addMenuItem(isDebuggingRemotely ? message.stop : message.debug, async () => {
    isDebuggingRemotely = !isDebuggingRemotely;

    await AsyncStorage.setItem(storageKey, JSON.stringify(isDebuggingRemotely));
    NativeModules.DevSettings.setIsDebuggingRemotely(isDebuggingRemotely);
  });
};

if (__DEV__) {
  setTimeout(withAsyncStorage, 100);
}