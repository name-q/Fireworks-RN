import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabsNavigation } from '@/navigator/tabbar';
import { BottomTabsParamList } from '@/navigator/router';
import { RouteProp } from '@react-navigation/native';

interface IProps {
    route: RouteProp<BottomTabsParamList, 'TabDemo1'>,
    navigation: BottomTabsNavigation
}

function TabDemo1({ route, navigation }: IProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Demo1',{id:'1111'})} >
                <Text style={{ margin: 10, color: 'blue' }}>TabDemo1</Text>
            </TouchableOpacity>
        </View >
    );
}

export default memo(TabDemo1)