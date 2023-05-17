import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { tabbarConfig, BottomTabsParamList, RootStackParamList } from '@/navigator/router'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type BottomTabsNavigation = BottomTabNavigationProp<BottomTabsParamList & Omit<RootStackParamList, "AppTabbar">>

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

function AppTabbar() {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        >
            {tabbarConfig?.map((item, index) => (
                <BottomTabs.Screen
                    key={index + item.name}
                    name={item.name}
                    // @ts-ignore
                    component={item.component}
                    options={{
                        ...item?.options,
                        title: item.title,
                        tabBarIcon: ({ color, size }) => (<AntDesign name={item.tabBarIconName} size={size} style={{ color }} />)
                    }}
                />
            ))}
        </BottomTabs.Navigator>
    );
}

export default AppTabbar;