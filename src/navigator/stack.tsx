import React from 'react';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from '@react-navigation/stack';

// import AppBottomTabs from '@/navigator/bottomTabs'
import Demo1 from '@/pages/demo1'

export type RootStackParamList = {
    Demo1: { id: string };
    Tabbar: {}
}
const Stack = createStackNavigator<RootStackParamList>();

export type RootStackNavigation = StackNavigationProp<RootStackParamList>

function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                // IOS水平滑动动画
                headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                // Android开启滑动返回
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}
        >
            {/* <Stack.Screen
                name="Tabbar"
                component={Tabbar}
                options={{ title: "", headerShown: false }}
            /> */}
            <Stack.Screen
                name="Demo1"
                component={Demo1}
                options={{ title: '详情页', headerShown: true }}
            />
        </Stack.Navigator>
    );
}

export default AppStack;


/* 5.x - 6.x差异统计 */
/*
    官方推荐包 @react-navigation/native-stack是原生封装不兼容
    手式库 headerStyleInterpolator 造成iOS与安卓滑动风格不统一
    @react-navigation/stack     是javaScript实现但高度可定制 
    为了风格统一使用后者

    显隐     headerMode:"none" => headerShown: false
    标题     headerTitle => title
*/