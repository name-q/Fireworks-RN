import { deregister, registerReducer, useAppDispatch } from "@/redux/store";
import { Helper } from "@/utils/index";
import { Toast } from "@ant-design/react-native";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, debounce } from "react-native-tools-next"

export const dispath = useAppDispatch()

export const initialState: stateType = {
    phone: '',
    loading: false
}

export interface stateType {
    phone: string;
    loading: boolean
}

const login = createSlice(
    {
        name: "login",
        initialState,
        reducers: {
            changePhone: (state, { payload }: PayloadAction<string>) => {
                state.phone = payload
            },
            changeLoading: (state, { payload }: PayloadAction<boolean>) => {
                state.loading = payload
            },
        },
        extraReducers(builder) {
            // builder.addCase(asynctest.fulfilled, (state, action) => {
            //     state.count = action.payload
            // })

            builder.addCase(registerLogin.rejected, (state, action) => {
                console.log(action, '<<<<payload', state)
            })
        },
    }
)

export const { changePhone, changeLoading } = login.actions;


export const registerLogin = createAsyncThunk(
    'registerLogin',
    async (phone: string) => {
        if (Helper.isPhonenumber(phone)) {
            
            return
        }
        Toast.info('请输入正确的手机号')
        dispath(changeLoading(false))
        return Helper.reject()
    }
)

// redux链接切片
export const connect = () => registerReducer({ login: login.reducer })

// redux断开切片
export const disconnect = () => deregister(["login"])