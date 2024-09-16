import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { Pagination } from '@mui/material'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PaginationWrapper } from './style'

const EntirePagination = memo(() => {
  const {totalCount,currentPage}=useSelector((state) =>({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage
  }),shallowEqual)

  // 小算法，必须掌握
  const totalPage = Math.ceil(totalCount/20) //一页size=20
  const startCount = currentPage * 20 + 1 //currentPage初始化为0，要＋1
  const endCount =( currentPage + 1 ) * 20

  /* 事件处理函数 */
  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    // 回到顶部
    window.scrollTo(0,0)

    // 更新最新的页码：redux => currentPage
    // diapatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchRoomListAction(pageCount - 1))
  }
  return (
    <PaginationWrapper>
        <div className='page-info'>
           {/* 分页器组件 marterial UI的 */}
          <Pagination count={totalPage} onChange={pageChangeHandle}/>
          <div className='info'>
             第 {startCount} - {endCount} 个房源, 共超过{totalCount}个
          </div>
        </div>
    </PaginationWrapper>
  )
})

export default EntirePagination