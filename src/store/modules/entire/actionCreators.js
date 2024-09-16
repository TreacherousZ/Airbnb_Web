import { getEntireRoomList } from "@/services/modules/entire"
import * as actionTypes from "./constants"

export const changeCurrentPageAction =(currentPage) =>({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage  //增强写法，相当于currentPage：currentPage
})

export const changeRoomListAction =(roomList) =>({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList  //增强写法，相当于currentPage：currentPage
})

export const changeTotalCountAction =(totalCount) =>({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount  //增强写法，相当于currentPage：currentPage
})

export const changeIsLoadingAction =(isLoading) =>({
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading
})

export const fetchRoomListAction =( currentPage=0 )=>{
    // return一个新函数，包含两个参数，dispatch,getState,一旦运行 fetchRoomListAction 函数，return的函数就会被自动调用
    /* return dispatch =>{
        getEntireRoomList(0).then(res =>{
            console.log(res);
        })
    } */
    return async (dispatch,getState) =>{
        // 0.修改currentPage
        dispatch(changeCurrentPageAction(currentPage))

        // 1.根据页码获取到最新的数据
        //const currentPage = getState().entire.currentPage //要动态取得当前页，所以需要getState参数
        // 获取数据时蒙版页面显示
        dispatch(changeIsLoadingAction(true))
        const res = await getEntireRoomList( currentPage*20) //size=20
        // 发送完网络请求再改为false
        dispatch(changeIsLoadingAction(false))
        


        // 2.获取到最新的数据，保存到redux中的store中
        const roomList = res.list
        const totalCount= res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
        dispatch(changeCurrentPageAction(currentPage))
    }
}
