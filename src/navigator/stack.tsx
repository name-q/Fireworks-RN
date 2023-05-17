import React from 'react';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from '@react-navigation/stack';

import AppTabbar from '@/navigator/tabbar'
import Demo1 from '@/pages/demo1'

export type RootStackParamList = {
    Demo1: { id: string };
    AppTabbar: {};
}
export type RootStackNavigation = StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator<RootStackParamList>();

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
            <Stack.Screen
                name="AppTabbar"
                component={AppTabbar}
                options={{ title: "", headerShown: false }}
            />
            <Stack.Screen
                name="Demo1"
                component={Demo1}
                options={{ title: '详情页', headerShown: true }}
            />
        </Stack.Navigator>
    );
}

export default AppStack;