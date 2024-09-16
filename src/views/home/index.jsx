import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-V1'
import HomeSectionV2 from './c-cpns/home-section-V2'
import { isEmptyObject } from '@/utils'
import HomeLongFor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-V3'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Home = memo(() => {
  /* 从redux中获取数据 useSekector()返回的是state,直接对state进行结构得到数据*/
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector((state)=>({ 
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo:state.home.discountInfo,
    recommendInfo:state.home.recommendInfo,
    longforInfo:state.home.longforInfo,
    plusInfo:state.home.plusInfo
  }),shallowEqual)

  /* 派发异步事件：发送网络请求 */
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction("xxx"))
    /* 首页头部需要固定定位  头部需要透明度*/
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: true }))
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        {/* HomeSectionV2 */}
       {/*  <div className='discount'>
          <SectionHeader title= {discountInfo.title} subtitle={discountInfo.subtitle}/>
          //子组件向父组件通信：SectionTabs内部切换事件发生外部不知道，所以需要定义一个函数，往内部传递这个函数，内部事件发生的时候，回调这个函数 
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
          <SectionRooms roomList ={discountInfo.dest_list?.[name]} itemWidth="33.3333%"/>
        </div> 
        */}
        {/* 下面两个组件相同，再封装一次 HomeSectionV1*/}
        {/*   <div className='good-price'>
            <SectionHeader title={goodPriceInfo.title}/>
            <SectionRooms  roomList={goodPriceInfo.list}/>
          </div>
          <div className='high-score'>
            <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle}/>
            <SectionRooms  roomList={highScoreInfo.list}/>
          </div> */}
          {isEmptyObject(discountInfo) && <HomeSectionV2 infoData = {discountInfo}/>}
          {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData = {recommendInfo}/>}
          {isEmptyObject(longforInfo) && <HomeLongFor infoData={longforInfo}/>}
          {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData = {goodPriceInfo}/>}
          {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData = {highScoreInfo}/>}
          {isEmptyObject(plusInfo) && <HomeSectionV3 infoData = {plusInfo}/>}
      
      </div> 
    </HomeWrapper>
  )
})

export default Home