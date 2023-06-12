**Fireworks-React Native**

****

<img title="" src="./logo.jpg" alt="" width="180">



## 开发

1.更名

npx react-native-rename@latest "youAppName"



2.修改remote地址

git remote -v

git remote remove origin

git remote -v

#切换为你的git地址

git remote add origin https://xxx.xxxx.com/app.git

#新库上传

git add .

git commit -m "app rename"

git push -u origin master

#或者rm -rf .git后重新走git init流程



| 包名                                        | 作用                 | 设置                              |
| ----------------------------------------- | ------------------ | ------------------------------- |
| babel-plugin-module-resolver              | 绝对路径               | babel.config.js / tsconfig.json |
| @react-native-async-storage/async-storage | 代替被删除的AsyncStorage |                                 |
| react-native-tools-next                   | 一些成熟的方法            | ⚠️Peer Dependencies             |
| react-native-vector-icons                 | 图标库                | xcode  android/app/build.gradle |
| react-native-splash-screen                | 启动屏                | 涉及原生                            |
| react-native-tts                          | 播报                 |                                 |
| styled-components                         | css-in-js          |                                 |
| @ant-design/react-native                  | UI库                |                                 |
| babel-plugin-import                       | 按需加载               |                                 |

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

使用react native debugger
