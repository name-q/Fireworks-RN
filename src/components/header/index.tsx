import React, { memo, useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { msg } from 'react-native-tools-next';
import { TouchableOpacity } from 'react-native';
import { Tts } from '@/utils/index';

interface HeaderProps {
    title?: string;
    showLeft?: boolean;
    reading?: string;
}

const Header: React.FC = ({ title, showLeft = true, reading }: HeaderProps) => {
    return (
        <Container>
            {showLeft && (
                <TouchableOpacity onPress={() => msg.emit('router:GoBack')}>
                    <AntDesign name={'left'} size={25} color={'#b1fbff'} allowFontScaling={false} />
                </TouchableOpacity>
            )}
            <Title allowFontScaling={false}>{title}</Title>
            {!!reading && (
                <TouchableOpacity onPress={() => Tts.speak(reading, true)}>
                    <Ionicons name={'headset-outline'} size={25} color={'#b1fbff'} allowFontScaling={false} />
                </TouchableOpacity>
            )}
        </Container>
    )
}

const Container = styled.View`
  height:40px;
  width:100%;
  box-shadow:0 0.8px #eee;
  background:#FFF;
  z-index:999;
  padding:0 10px;
  flex-wrap:nowrap;
  flex-direction:row;
  align-items:center;
`;

const Title = styled.Text`
  flex:1;
  text-align:center;
`;
export default memo(Header)