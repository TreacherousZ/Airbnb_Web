import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  // 定义内部状态
  const [showRight, setShowRight] = useState(false)

  // 组件渲染完毕，判断是否显示右侧按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth //可滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth //本身占据的宽度
    const totalDistance = scrollWidth - clientWidth

    setShowRight(totalDistance > 0)
  }, [props.children])

  return (
    <ViewWrapper>

      <button>左边按钮</button>
      {showRight && <button>右边按钮</button>}

      <div className='scroll-content' ref={scrollContentRef}>
        {props.children}
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView