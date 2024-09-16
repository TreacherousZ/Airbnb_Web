import { createSlice } from "@reduxjs/toolkit";

const mainSlice =createSlice({
    name: "main",
    initialState: {
        /* 每进入一个页面就改掉headerConfig */
        headerConfig: {
            isFixed: false ,//头部是否要做固定定位
            topAlpha:false, //顶部是否要做透明效果

        }
    },
    reducers: {
        changeHeaderConfigAction(state,{payload}){
            state.headerConfig = payload
        }
    }
})

export const { changeHeaderConfigAction} = mainSlice.actions
export default mainSlice.reducer