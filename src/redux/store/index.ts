import { configureStore } from "@reduxjs/toolkit";

import tabdemo1 from "@/pages/tabdemo1/redux/slice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const GolbalStore = configureStore({
    reducer: {
        tabdemo1
    },
    devTools: __DEV__,
})

export type GolbalStoreType = ReturnType<typeof GolbalStore.getState>
export type GolbalDispatchType = typeof GolbalStore.dispatch
export const useAppSelector:TypedUseSelectorHook<GolbalStoreType> = useSelector;
export const useAppDispatch = () => useDispatch<GolbalDispatchType>();

export default GolbalStore