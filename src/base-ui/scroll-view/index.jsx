import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
    /* 定义内部状态 */
    const [showRight,setShowRight] = useState(false)
    const [showLeft,setShowLeft] = useState(false)
    const [posIndex,setPosIndex] = useState(0) //拿到item的index
    /* const [totalDistance,setTotalDistance] =useState(0) *//* 这样做会导致每次变化就渲染组件，实际上没必要，可以换成useRef  */
    const totalDistanceRef = useRef() //记录下当前移动距离

    /* 组件渲染完毕，判断是否显示右侧的按钮 */
    const scrollContentRef = useRef()
    useEffect(()=>{
        const scrollWidth=scrollContentRef.current.scrollWidth //一共可以滚动的宽度
        const clientWidth=scrollContentRef.current.clientWidth //本身占据的宽度
        const totalDistance = scrollWidth-clientWidth
        totalDistanceRef.current = totalDistance //记录下当前移动距离
        setShowRight(totalDistance >0)
       /*  setTotalDistance(totalDistance) */
    },[props.children]) //一旦children发生变化，就要执行 
    
    /* 事件处理的逻辑 */
    function controlClickHandle(isRight){
        const newIndex = isRight? posIndex +1:posIndex -1
        const newEl = scrollContentRef.current.children[newIndex] //获取到对应索引的元素
        const newOffsetLeft = newEl.offsetLeft //.offsetLeft的距离是相对于有定位的父元素的，所以对.scroll-content要添加相对定位(其实不加也可)
        scrollContentRef.current.style.transform =`translate(-${newOffsetLeft}px)`
        setPosIndex(newIndex) //记录最新索引
        // 是否继续显示右边的按钮
        setShowRight(totalDistanceRef.current >newOffsetLeft)
        setShowLeft(newOffsetLeft>0) //判断左边按钮显示与否
    }

  return (
    <ViewWrapper>
        { showLeft && (
            <div className='control left' onClick={e=>controlClickHandle(false)}>
                <IconArrowLeft/>
            </div>
        )}
        { showRight && (
            <div className='control right' onClick={e=>controlClickHandle(true)}>
                <IconArrowRight/>
            </div>
        )}
        {/* 内部展示的内容可能是图片，可能是一个Item，可能是按钮等，用插槽来做 */}
        <div className='scroll'>
            <div className='scroll-content' ref={scrollContentRef}>
                {props.children}
            </div>
        </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView