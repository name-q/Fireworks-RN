import React, { memo, useEffect, useRef } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { BottomTabsNavigation } from '@/navigator/tabbar';
import { BottomTabsParamList } from '@/navigator/router';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tts } from '@/utils/index';
import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';
import { Button, Toast } from '@ant-design/react-native';

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { asynctest, connect, countAdd, disconnect, initialState, stateType } from './redux/slice';

const Container = styled.View`
  flex:1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: 20px;
  color: blue;
  font-weight: 500;
`;

interface IProps {
    route: RouteProp<BottomTabsParamList, 'TabDemo1'>,
    navigation: BottomTabsNavigation
}

function TabDemo1({ route, navigation }: IProps) {

    const animationRef = useRef<Lottie>(null)
    useEffect(() => {
        connect()
        animationRef.current?.play()
        return () => disconnect()
        // Or set a specific startFrame and endFrame with:
        // animationRef.current?.play(10, 100);
    }, [])

    const main: stateType = useAppSelector(state => state.tabdemo1)
    let { count } = main || initialState
    const dispath = useAppDispatch()

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Container>
                    <Lottie
                        loop
                        ref={animationRef}
                        source={require('./ae.json')}
                    />
                    <Text style={{ marginTop: 320 }}>Open up App.js to start working on your app!</Text>
                    <Button type='primary' onPress={() => { Toast.info('test tosat! test tosat!!!\n11') }}>tosat</Button>
                </Container>
                <Text>{count}</Text>
                <TouchableOpacity onPress={() => dispath(countAdd(0.1))} >
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispath(asynctest())} >
                    <Text>async</Text>
                </TouchableOpacity>
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
            </ScrollView>
        </SafeAreaView >
    );
}

export default memo(TabDemo1)