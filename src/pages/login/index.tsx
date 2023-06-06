import React, { memo, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { RootStackNavigation } from '@/navigator/stack';
import { RootStackParamList } from '@/navigator/router';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { changePhone, connect, disconnect, initialState, stateType } from './redux/slice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

import { Button, Carousel, InputItem, WhiteSpace, WingBlank } from '@ant-design/react-native'
import WwwImage from '@/models/wwwImage';
import { H3 } from '@/models/h16';


interface IProps {
    route: RouteProp<RootStackParamList, 'Login'>,
    navigation: RootStackNavigation
}

function Login({ route, navigation }: IProps) {
    useEffect(() => {
        connect()
        return () => disconnect()
    }, [])

    const main: stateType = useAppSelector(state => state.login)
    let { loading, phone } = main || initialState
    const dispath = useAppDispatch()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', alignContent: 'center' }}>
            <WhiteSpace size="xl" />
            <Carousel
                style={styles.wrapper}
                autoplay
                infinite
            >
                <WwwImage uri='https://ruiyinmall-dev.oss-cn-nanjing.aliyuncs.com/qytest/banner1.jpg' />
                <WwwImage uri='https://ruiyinmall-dev.oss-cn-nanjing.aliyuncs.com/qytest/banner2.jpg' />
                <WwwImage uri='https://ruiyinmall-dev.oss-cn-nanjing.aliyuncs.com/qytest/banner3.jpg' />
                <WwwImage uri='https://ruiyinmall-dev.oss-cn-nanjing.aliyuncs.com/qytest/banner4.jpg' />
                <WwwImage uri='https://ruiyinmall-dev.oss-cn-nanjing.aliyuncs.com/qytest/banner5.jpg' />
            </Carousel>
            <WhiteSpace />
            <InputItem
                clear
                type="number"
                onChange={(value: any) => {
                    dispath(changePhone(value))
                }}
                value={phone}
                maxLength={11}
                placeholder="手机号">
                +86
            </InputItem>
            <WhiteSpace size='lg' />
            <WingBlank>
                <Button
                    type="primary"
                    onPress={() => {
                        console.log(1)
                    }}
                    loading={loading}
                    disabled={loading}
                >
                    登录
                </Button>
            </WingBlank>
            <WhiteSpace size='lg' />
            <H3 color='#999'>未注册手机验证后自动注册并登录</H3>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        width: '100%',
        height: 200,
    }
})

export default memo(Login)