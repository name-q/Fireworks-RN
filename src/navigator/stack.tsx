import React from 'react';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from '@react-navigation/stack';

import { stackConfig, RootStackParamList } from '@/navigator/router'
import AppTabbar from '@/navigator/tabbar'

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

            {stackConfig?.map((item, index) => (
                <Stack.Screen
                    key={index + item.name}
                    name={item.name}
                    // @ts-ignore
                    component={item.component}
                    options={{
                        ...item?.options,
                        title: item.title,
                        headerShown: item.headerShow
                    }}
                />
            ))}
        </Stack.Navigator>
    );
}

export default AppStack;