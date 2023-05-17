import React from 'react';

import { RootStackParamList } from '@/navigator/stack'
import { StackNavigationOptions } from '@react-navigation/stack';

import Demo1 from '@/pages/demo1'

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
        options:{}
    }
]

const tabbarConfig = []

export { stackConfig }