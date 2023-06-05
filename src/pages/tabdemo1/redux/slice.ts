import { deregister, registerReducer } from "@/redux/store";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, debounce } from "react-native-tools-next"

export const initialState: stateType = {
    count: 0.1
}

export interface stateType {
    count: number
}

const tabdemo1 = createSlice(
    {
        name: "tabdemo1",
        initialState,
        reducers: {
            countAdd: debounce((state, action: PayloadAction<number>) => {
                state.count = add(state.count, action.payload)
            }, 1000)
        },
        extraReducers(builder) {
            builder.addCase(asynctest.fulfilled, (state, action) => {
                state.count = action.payload
            })
        },
    }
)

export const { countAdd } = tabdemo1.actions;


export const asynctest = createAsyncThunk(
    'asynctest',
    async () => {
        return await Promise.resolve(1)
    }
)

// redux链接切片
export const connect = () =>  registerReducer({tabdemo1:tabdemo1.reducer})

// redux断开切片
export const disconnect = () => deregister(["tabdemo1"])