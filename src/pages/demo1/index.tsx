import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackNavigation } from '@/navigator/stack';
import { RootStackParamList } from '@/navigator/router';
import { RouteProp } from '@react-navigation/native';

interface IProps {
    route: RouteProp<RootStackParamList, 'Demo1'>,
    navigation: RootStackNavigation
}

function Demo1({ route, navigation }: IProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.params.id || '?'}</Text>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Text style={{ margin: 10, color: 'blue' }}>Go back</Text>
            </TouchableOpacity>
        </View >
    );
}

export default memo(Demo1)