import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DetailInfos from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const dispatch =useDispatch()
  useEffect(() =>{
    /* 详情页面头部不需要固定 */
    dispatch( changeHeaderConfigAction({isFixed: false , topAlpha:false}))
  },[dispatch])
  /* 从redux中获取数据 */
  const { detailInfo } = useSelector((state) => ({
    detailInfo : state.detail.detailInfo 
  }))
  return (
    <DetailWrapper>
      <DetailPictures/>
      <DetailInfos/>
    </DetailWrapper>
  )
}) 

export default Detail