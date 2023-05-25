**Fireworks-React Native**

****

<img title="" src="./logo.jpg" alt="" width="180">

| 包名                                        | 作用                 | 设置                              |
| ----------------------------------------- | ------------------ | ------------------------------- |
| babel-plugin-module-resolver              | 绝对路径               | babel.config.js / tsconfig.json |
| @react-native-async-storage/async-storage | 代替被删除的AsyncStorage |                                 |
| react-native-tools-next                   | 一些成熟的方法            | ⚠️Peer Dependencies             |
| react-native-vector-icons                 | 图标库                | xcode  android/app/build.gradle |
| react-native-splash-screen                | 启动屏                | 涉及原生                            |
| react-native-tts                          | 播报                 |                                 |
| styled-components                         | css-in-js          |                                 |

⚠️android所需权限声明尚未配置，请根据实际使用情况配置[详见>>](https://github.com/zoontek/react-native-permissions)

IOS配置了Camera案例

| 包名                       | 对等依赖                                                                                     |     |
| ------------------------ | ---------------------------------------------------------------------------------------- | --- |
| @react-navigation/native | react-native-screens                                      react-native-safe-area-context |     |
| @react-navigation/stack  | react-native-gesture-handler                        react-native-masked-view/masked-view |     |
|                          |                                                                                          |     |
|                          |                                                                                          |     |
|                          |                                                                                          |     |

## 调试

Chrome进入chrome://inspect/#devices

点击Configure..新增localhost:8081

点击React Native Experimental (Improved Chrome Reloads)下的inspect
