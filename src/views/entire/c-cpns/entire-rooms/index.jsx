import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

const EntireRooms = memo(() => {
  // 从redux中获取roomList数据useSelect 返回的是对象，所以要加{}
  const { roomList,totalCount,isLoading } =useSelector((state) =>({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }),shallowEqual)

  /* 事件处理 */
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((item) =>{
    // 保存传进来的轮播图数据，方便detail页面使用（直接传到详情页很难，最好放在redux中共享）,方法其实还是一样的状态管理写法（entire.js）
    dispatch(changeDetailInfoAction(item))
    navigate("/detail")
  },[navigate,dispatch])

  return (
    <RoomsWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className="list">
        {
          roomList.map(item =>{
            return(
              /* 可以直接使用Home里面conponents封装得RoomItem组件，5个一行 */
              <RoomItem 
                itemData={item} 
                itemWidth="20%" 
                key={item._id}
                itemClick = {itemClickHandle}
              />
            )
          })
        }
      </div>

      {isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms