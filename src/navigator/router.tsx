import React from 'react';

import { StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import Demo1 from '@/pages/demo1'
import TabDemo1 from '@/pages/tabdemo1'

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
}

const tabbarConfig: Array<tabbarMap> = [
    {
        title: '首页',
        name: 'TabDemo1',
        tabBarIconName: 'customerservice',
        component: TabDemo1,
        options: {}
    }
]

export { stackConfig, tabbarConfig };
export type { RootStackParamList, BottomTabsParamList };
