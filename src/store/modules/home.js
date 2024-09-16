// home模块的状态配置使用rtk新方法，entire的状态配置使用原来的redux方法，所以开辟文件夹，实际只需用一种
import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData,getHomeHotRecommendData, getHomeLongforData, getHomePlusData} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

// 异步请求
/* export const fetchHomeDataAction = createAsyncThunk("fetchdata",()=>{
    getHomeGoodPriceData().then(res => {
        console.log(res);
    })
}) */
export const fetchHomeDataAction = createAsyncThunk("fetchdata",(payload,{dispatch})=>{ 
    getHomeGoodPriceData().then(res =>{
        dispatch(changeGoodPriceInfoAction(res))
    })
    //return res //return res以后要在下面的reducers里面添加一个额外的extraReducers
    getHomeHighScoreData().then(res =>{
        dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res =>{
        dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotRecommendData().then(res =>{
        dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then(res =>{
        dispatch(changeLongforInfoAction(res))
    })
    getHomePlusData().then(res =>{
        dispatch(changePlusInfoAction(res))
    })
    // return {goodPrice:res, highScore:res2} //由于两个异步不是同时，没法return,直接运行dispatch
})

const homeSlice = createSlice({
    name:"home", //要修改state里面的数据，则必须通过action
    initialState:{
        goodPriceInfo: {} ,//数据包含数组，标题，副标题等，所以是一个对象
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo:{},
        longforInfo:{},
        plusInfo:{}
    },
    reducers:{
        changeGoodPriceInfoAction(state,{payload}) { //第二个参数是action函数，里面有参数payload，所以解构方式拿到payload
            state.goodPriceInfo= payload
        },
        changeHighScoreInfoAction(state,{payload}) {
            state.highScoreInfo= payload
        },
        changeDiscountInfoAction(state,{payload}){
            state.discountInfo = payload
        },
        changeRecommendInfoAction(state,{payload}){
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state,{payload}){
            state.longforInfo = payload
        },
        changePlusInfoAction(state,{payload}){
            state.plusInfo = payload
        },
    },
    /* fetchHomeDataAction直接dispatch Action函数，则不再需要额外的reducer */
   /*  extraReducers:{
        [fetchHomeDataAction.fulfilled](state,{payload}) {
            state.goodPriceInfo = payload
        }
    } */

})


export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeRecommendInfoAction,
    changeLongforInfoAction,
    changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer