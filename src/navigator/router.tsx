import React from 'react';

import { StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import Demo1 from '@/pages/demo1'
import TabDemo1 from '@/pages/tabdemo1'
import TabDemo2 from '@/pages/tabdemo2'

// 堆栈
interface stackMap {
    title?: string;
    headerShow?: boolean;
    name: keyof RootStackParamList;
    component: React.ReactNode | React.MemoExoticComponent<any>;
    options?: StackNavigationOptions;
}

type RootStackParamList = {
    AppTabbar: undefined;
    Demo1: { id: string };
}

const stackConfig: Array<stackMap> = [
    {
        title: '标题',
        headerShow: true,
        name: "Demo1",
        component: Demo1,
        options: {}
    }
]

// 底部tabbar
interface tabbarMap {
    title: string;
    tabBarIconName: string;
    component: React.ReactNode | React.MemoExoticComponent<any>;
    name: keyof BottomTabsParamList;
    options?: BottomTabNavigationOptions
}

type BottomTabsParamList = {
    TabDemo1: undefined;
    TabDemo2: undefined;
}

// tabBarIconName可使用图标 https://oblador.github.io/react-native-vector-icons/
const tabbarConfig: Array<tabbarMap> = [
    {
        title: '首页',
        name: 'TabDemo1',
        tabBarIconName: 'home',
        component: TabDemo1,
        options: {
            headerShown: false
        }
    },
    {
        title: '我的',
        name: 'TabDemo2',
        tabBarIconName: 'user',
        component: TabDemo2,
        options: {
            headerShown: false,
            // TODO 封装公共的顶部区域
            // headerShown: true,
            // header:() => (<Text>111</Text>)
        }
    }
]

export { stackConfig, tabbarConfig };
export type { RootStackParamList, BottomTabsParamList };
