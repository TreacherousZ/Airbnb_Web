import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex =0 } = props
  const contentRef = useRef() 

  useEffect(()=>{
    // 1.获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemElOffsetLeft = selectItemEl.offsetLeft //记得必须有定位父元素
    const itemElWidth = selectItemEl.clientWidth //当前item本身的宽度
    //2.content的宽度
    const contentWidth =contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth //总共移动的距离
    //3. 获取selectIndex要滚动的距离
    let distance = itemElOffsetLeft + itemElWidth * 0.5 - contentWidth * 0.5 //distance不能是const 因为要改变值
    // 4.移动对应item当中间（特殊情况的处理）
    if(distance <0) distance =0 //最多移动到0的位置（左边的特殊情况）
    const totalDistance = contentScroll - contentWidth //可移动的最大距离
    if (distance> totalDistance) distance =totalDistance //右边的特殊情况处理
    // 5.改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`

  },[selectIndex])

  return (
    <IndicatorWrapper>
        <div className='i-content' ref={contentRef }>
          {
            /* 展示其他地方使用Indicator组件包裹的内容 */
            props.children 
          }
        </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator