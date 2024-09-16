import { configureStore } from "@reduxjs/toolkit"; //状态管理 redux:npm install @reduxjs/toolkit
import mainReducer from "./modules/main"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire" //整个文件夹都是状态配置
import detailReducer from "./modules/detail"

// store文件夹就是状态管理，所有页面的数据都在这里面，Index.js就是为了合并不同页面reducer

const store = configureStore({
    reducer:{
        home: homeReducer, //creatSlice配置的
        entire: entireReducer, //普通方式配置的,所以其实只要confugureStore传入一个reducer即可，不论哪种方法
        detail: detailReducer,
        main: mainReducer

    }
})

export default store