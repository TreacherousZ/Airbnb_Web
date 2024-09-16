import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import ScrollView from '../../base-ui/scroll-view'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
    const { tabNames=[] ,tabClick} =props
    const [currentIndex, setCurrentIndex] = useState(0) //对于点击事件打印的值，需要定义一个索引接收和改变

    function itemClickHandle(index,item){
        setCurrentIndex(index)
        tabClick(index,item) //调用函数，把index和item传出去,item就是城市name
    }

  return (
    <TabsWrapper>
       <ScrollView>
        {
            tabNames.map((item ,index)=>{
                return(
                    <div 
                        key ={index}
                        className ={classNames("item",{active: index===currentIndex})} //npm install classnames
                        onClick={e=> itemClickHandle(index,item)}
                    >
                        {item}

                    </div>
                )
            })
        }
       </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
    tabNames :PropTypes.array,

}

export default SectionTabs