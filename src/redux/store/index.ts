import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


// reducer 切换为动态载入载出方案

// 给一个基础库 防止我们动态添加的库都被删除时(一般不会出现)replaceReducer出现错误
// 同时避免了configureStore reducer初始为空{} 时combineReducers的错误
const EmptyBaseLibraryReducerForNameQ = createSlice(
    {
        name: "EmptyBaseLibraryReducerForNameQ",
        initialState: { name: "name-q" },
        reducers: {
        }
    }
)

let reducer = { EmptyBaseLibraryReducerForNameQ: EmptyBaseLibraryReducerForNameQ.reducer }

const GolbalStore = configureStore({
    reducer,
    devTools: __DEV__,
})


//动态注册reducer
export function registerReducer(reducerMap: { [name: string]: Function }) {
    reducer = { ...reducer, ...reducerMap };
    GolbalStore.replaceReducer(
        combineReducers(reducer),
    );
}

//动态解除reducer
export function deregister(reducerKeys: [string]) {
    reducerKeys.forEach(itemReduce => {
        // @ts-ignore
        if (reducer[itemReduce]) delete reducer[itemReduce];
    });
    GolbalStore.replaceReducer(
        combineReducers(reducer),
    );
}


// TODO 不用提示EmptyBaseLibraryReducerForNameQ的存在，优化点：useAppSelector中提示全局已有库名
// export type GolbalStoreType = ReturnType<typeof GolbalStore.getState> & { [name: string]: any }
export type GolbalStoreType = { [name: string]: any }
export type GolbalDispatchType = typeof GolbalStore.dispatch
export const useAppSelector: TypedUseSelectorHook<GolbalStoreType> = useSelector;
export const useAppDispatch = () => useDispatch<GolbalDispatchType>();

export default GolbalStore