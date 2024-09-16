import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
/*切换内容SwitchTransition */
import { CSSTransition, SwitchTransition} from 'react-transition-group'


import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import { BrowserWrapper } from './style'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'


const PictureBrowser = memo((props) => {
    const { pictureUrls ,closeClick } = props
    const [currentIndex,setCurrentIndex] = useState(0)
    /* 为了样式里能知道左移还是右移，来记录useEffect中的左移右移 */
    const [isNext , setIsNext] = useState(true)
    /* 记录底部的显示或隐藏状态 */
    const [showList, setShowList] =useState(true)

    // 当图片浏览器展示出来时，滚动的功能消失,滚动的原因不是图片浏览器滚动，而是detail-picture中的东西太多导致滚动
    useEffect(()=>{
        document.body.style.overflow = "hidden"

        /* 一旦图片浏览器关闭掉，就可以继续滚动 */
        return ()=>{
            document.body.style.overflow = "auto"
        }
    },[])

    // 顶部事件监听的逻辑：点击顶部的X 就关闭图片浏览器
    // 但在这里是关不掉的，图片浏览器是靠showBrowser=true展示的，应该到detail-pictures的组件里，传递一个点击事件，修改showBrowser
    function closeBtnClickHandle(){
        /* 需要有函数再调用，否则就是调用undefined */
        if (closeClick) closeClick() 
    }

    // 中间部分切换图片事件逻辑
    function controlClickHandle(isNext = true){
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
        if (newIndex < 0 ) newIndex = pictureUrls.length -1
        if (newIndex > pictureUrls.length -1) newIndex = 0

        setCurrentIndex(newIndex)
        /* 记录左移右移 这里面的isNext只在函数内有效 */
        setIsNext(isNext)
    }

    // 点击预览图切换大图（别忘了：判断图是从左边切还是右边切）
    function bottomItmClickHandle(index){
        setIsNext( index > currentIndex? true:false)
        setCurrentIndex(index)    
    }

  return (
    /* isNext:传入左移右移属性给样式做判断移动  showList:传入样式判断显示或隐藏图片预览，改变list高度 */
    <BrowserWrapper isNext ={isNext} showList={showList}>
        <div className='top'>
            <div className='close-btn' onClick={closeBtnClickHandle}>
                {/* 引入SVG */}
                <IconClose/>
            </div>
        </div>
        <div className='slider'>
            <div className='control'>
                <div className='btn left' onClick={ e => controlClickHandle(false)}>
                    {/* 传进去是字符串拼接 height ={77} 也可以 */}
                    <IconArrowLeft  width="77" height="77"/>
                </div>
                <div className="btn right" onClick={ e => controlClickHandle(true)}>
                    <IconArrowRight width="77" height="77"/>
                </div>
            </div>
            {/* 由于图片尺寸不一，原官网也不是轮播图等原因，此处实际每次只展示一张图片，记录索引进行切换，然后加动画 */}
            {/* 如何在切换图片的过程中添加过度动画：  npm install react-transition-group */}
            <div className='picture'>
                {/* mode: in-out 先进后出 SwitchTransition中要放CSSTransition,不能直接放元素 */}
                <SwitchTransition mode='in-out'>
                    <CSSTransition
                        /* 通过Key不同切换图片 */
                        key={pictureUrls[currentIndex]}
                        className = "pic"
                        /* 必要 动画时间 */
                        timeout={200}
                    >
                        <img src={pictureUrls[currentIndex]} alt="" />
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
        <div className='preview'>
            {/* preview是占据一行，图片预览只占中间，所以再用div包裹一层 */}
            <div className='info'>
                <div className='desc'>
                    <div className="count">
                        <span>{currentIndex +1}/{pictureUrls.length}:</span>
                        <span>room apartment图片{currentIndex +1}</span>
                    </div>
                    {/* 由于显示和隐藏切换是有动画的，所以不能通过修改display:block/none实现 */}
                    {/* 应该通过改变高度实现，且要做相对于底部的定位，实现高度变化->0,最终变为显示照片列表的文字在底部 */}
                    <div className="toggle" onClick={e => setShowList(!showList)}>
                        <span>{showList? "隐藏照片列表" : "显示照片列表" }</span>
                        {showList? <IconTriangleBottom/> : <IconTriangleTop/>}
                    </div>
                </div>
               <div className='list'>
                   {/* 需要传递参数，告知选择了谁 */}
                    <Indicator selectIndex ={currentIndex} >
                        {
                            pictureUrls.map((item,index) =>{
                                return (
                                    <div 
                                        className={classNames("item", {active: currentIndex===index})}
                                        key={item}
                                        onClick={e =>bottomItmClickHandle(index)}
                                    >
                                        <img src={item} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Indicator>
               </div>
            </div>
        </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
    pictureUrls : PropTypes.array
}

export default PictureBrowser