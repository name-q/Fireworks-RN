import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'

import TabDemo1 from '@/pages/tabdemo1'

export type BottomTabsParamList = {
    TabDemo1: undefined;
}
export type BottomTabsNavigation = BottomTabNavigationProp<BottomTabsParamList>

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

function AppTabbar() {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        >
            <BottomTabs.Screen
                name="TabDemo1"
                component={TabDemo1}
                options={{
                    title: '我听',
                    tabBarIcon: ({ color, size }) => (<AntDesign name='customerservice' size={size} style={{ color }} />)
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default AppTabbar;