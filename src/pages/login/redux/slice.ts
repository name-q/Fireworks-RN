import { deregister, registerReducer } from "@/redux/store";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, debounce } from "react-native-tools-next"

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
            changePhone: (state, action: PayloadAction<string>) => {
                state.phone = action.payload
            }
        },
        extraReducers(builder) {
            // builder.addCase(asynctest.fulfilled, (state, action) => {
            //     state.count = action.payload
            // })
        },
    }
)

export const { changePhone } = login.actions;


// export const asynctest = createAsyncThunk(
//     'asynctest',
//     async () => {
//         return await Promise.resolve(1)
//     }
// )

// redux链接切片
export const connect = () => registerReducer({ login: login.reducer })

// redux断开切片
export const disconnect = () => deregister(["login"])