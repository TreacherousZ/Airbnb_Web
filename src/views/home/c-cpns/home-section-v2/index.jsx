import PropTypes from 'prop-types'
import React, { memo, useState,useCallback } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    /* 从props中获取数据 */
  const {infoData} =props
    /* 定义内部的state */
  const initialName = Object.keys(infoData.dest_list)[0] //home主index中先判断有无数据，不判断的话此处也不对，会渲染两次空
  const [ name,setName]  =useState(initialName)
    /* 数据的转换 */
  const tabNames = infoData.dest_address?.map(item =>item.name)
  /* 事件处理函数 */
  const tabClickHandle = useCallback(function(index,name){ //性能优化，防止函数传进去，组件一直刷新
    setName(name)
  },[])

  return (
    <SectionV2Wrapper>
        <SectionHeader title= {infoData.title} subtitle={infoData.subtitle}/>
        {/* //子组件向父组件通信：SectionTabs内部切换事件发生外部不知道，所以需要定义一个函数，往内部传递这个函数，内部事件发生的时候，回调这个函数  */}
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
        <SectionRooms roomList ={infoData.dest_list?.[name]} itemWidth="33.3333%"/>
        <SectionFooter name ={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
    infoData:PropTypes.object
}

export default HomeSectionV2