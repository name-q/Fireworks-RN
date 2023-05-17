import React from 'react';

import { RootStackParamList } from '@/navigator/stack'
import { StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabsParamList } from '@/navigator/tabbar';
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

const tabbarConfig: Array<tabbarMap> = [
    {
        title: '首页',
        name: 'TabDemo1',
        tabBarIconName: 'customerservice',
        component: TabDemo1,
        options: {}
    }
]

export { stackConfig, tabbarConfig }