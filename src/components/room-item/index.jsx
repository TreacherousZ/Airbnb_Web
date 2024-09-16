import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd' //ant design组件库
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
    /* 从使用RoomItem的组件的地方传入的 */
    const {itemData , itemWidth ="25%",itemClick} = props
    /* 该组件传给Indicator组建的 */
    const [ selectIndex, setSelectIndex ] = useState(0)
    const sliderRef = useRef()

    /* 事件处理的函数 isRight就是isNext */
    function controlClickHandle(isRight = true,event){
        /* 使用ant design组件库中Carousel组件的上一张/下一张函数，使用ref传递 */
        // 1. 上一个面板/下一个面板
        isRight? sliderRef.current.next(): sliderRef.current.prev()
        /* 做完详情页的补充：详情页做完后点击entire页面的轮播图箭头发现也会跳转到详情页：原因是事件冒泡了箭头冒到了item，接收到跳转 */

        // 指示器圆点处：最新索引(走马灯和圆点切换分开做，做完一个，另一个可以使用之前定义的索引)
        let newIndex = isRight? selectIndex+1 : selectIndex-1 //不能用const 需要修改值，要用let
        const length = itemData.picture_urls.length
        if (newIndex < 0 ) newIndex = length -1
        if(newIndex > length -1) newIndex = 0
        setSelectIndex(newIndex)

        // 把事件event参数也传进来，阻止事件冒泡
        event.stopPropagation()
    }

    /* 点击item会进入详情页 但不想要点击home页也跳转 而entire home页都使用了该组件 所以可以把点击事件传递出去，其他地方做*/
    /* 即使用了silder组件的地方来做个点击函数，传入到该组件回调 */
    function itemClickHandle(){
        /* itemClick()函数中实现跳转到详情页，而详情页展示点击的图片，所以要获取到轮播图片数据 */
        if(itemClick) itemClick(itemData)
    }


    /* 由于entire页面使用room-item组件的是由有slider home页面使用的时候没有，所以要通过做判断确定RoomItem组件里面放什么 */
   /* 子元素的赋值 */
    const pictureElement =(
        <div className='cover'>
            <img src={itemData.picture_url} alt=""/>
        </div>
    )

    const sliderElement = (
        <div className='slider'>
                <div className='control'>
                    <div className='btn left' onClick={e =>controlClickHandle(false,e)}>
                        <IconArrowLeft width="24" height="24"/>
                    </div>
                        {/* 除了箭头 点击右侧区域都能轮播 */}
                    <div className='btn right' onClick={e =>controlClickHandle(true,e)}> 
                        <IconArrowRight width="24" height="24"/>
                    </div>
                </div>
                {/* indicator 点 要做绝对定位，所以也可放在轮播图下面 */}
                <div className='indicator'>
                    <Indicator selectIndex={selectIndex}>
                        {/* 里面放圆点 */}
                        {
                            itemData?.picture_urls?.map((item ,index)=>{
                                return (
                                    <div className="dot-item" key={item}>
                                        <span className={classNames("dot", {active: selectIndex === index})}></span>
                                    </div>
                                )
                            })
                        }
                    </Indicator>
                </div>
                {/* 不显示下面切换点 dots={false} 轮播图*/}
                <Carousel dots={false} ref ={sliderRef}> 
                    {   //多张图片映射，item就是一张图片的地址
                        itemData?.picture_urls?.map(item =>{ 
                            return (
                                <div className='cover' key={item}>
                                    <img src={item} alt=""/>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
    )
  return (
    <ItemWrapper 
        verifyColor ={itemData?.verify_info?.text_color || "#39576a"}
        itemWidth={itemWidth}
        onClick = {itemClickHandle}
    > 
        <div className='inner'>
            {/* 如果传入的数据里面没有picture_urls 说明不要轮播图 不加入子元素*/}
            {!itemData.picture_urls? pictureElement: sliderElement}
            <div className='desc'>
                {itemData.verify_info.messages.join("·")}
            </div>
            <div className='name'>{itemData.name}</div>
            <div className='price'>￥{itemData.price}/晚</div>
            <div className='bottom'>
                <Rating 
                    value={itemData.star_rating ?? 5} //?? 表示前面值是undefined或者none的时候取后者，这里不能为||,否则星级为0的时候也会变成5
                    precision={0.1} //星级的精准度
                    readOnly  
                    sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
                />
                <span className='count'>{itemData.reviews_count}</span>
                {
                itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
                }
            </div>
        </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
    itemData:PropTypes.object
}

export default RoomItem