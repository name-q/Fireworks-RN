import React, { memo, useEffect, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { BottomTabsNavigation } from '@/navigator/tabbar';
import { BottomTabsParamList } from '@/navigator/router';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tts } from '@/utils/index';
import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';

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

const ButtonContainer = styled.TouchableOpacity<{ bgColor: string }>`
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

interface IProps {
    route: RouteProp<BottomTabsParamList, 'TabDemo1'>,
    navigation: BottomTabsNavigation
}

function TabDemo1({ route, navigation }: IProps) {

    const animationRef = useRef<Lottie>(null)
    useEffect(() => {
        animationRef.current?.play()
        // Or set a specific startFrame and endFrame with:
        // animationRef.current?.play(10, 100);
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Container>
                <Lottie
                    loop
                    ref={animationRef}
                    source={require('./ae.json')}
                />
                <Text style={{ marginTop: 320 }}>Open up App.js to start working on your app!</Text>
                <ButtonContainer onPress={() => { console.log(1) }} bgColor={'red'}>
                    <ButtonText>button</ButtonText>
                </ButtonContainer>
            </Container>
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