import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabsNavigation } from '@/navigator/tabbar';
import { BottomTabsParamList } from '@/navigator/router';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tts } from '@/utils/index';

interface IProps {
    route: RouteProp<BottomTabsParamList, 'TabDemo1'>,
    navigation: BottomTabsNavigation
}

function TabDemo1({ route, navigation }: IProps) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Demo1', { id: '1111' })} >
                <Text style={{ margin: 10, color: 'blue' }}>stack Demo1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TabDemo2')} >
                <Text style={{ margin: 10, color: 'blue' }}>Tabbar Demo2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Text style={{ margin: 10, color: 'blue' }}>Invalid Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Tts.speak('去抽烟 life is fucking movie')} >
                <Text style={{ margin: 10, color: 'blue' }}>speak</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}

export default memo(TabDemo1)