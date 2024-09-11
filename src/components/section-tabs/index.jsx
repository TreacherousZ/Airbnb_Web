import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'


const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props //给一个默认值为空，防止后台没有加载过来的情况
  const [currentIndex, setCurrentIndex] = useState(0)
  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames('item', { active: index === currentIndex })}
                onClick={e => itemClickHandle(index, item)}>{item}</div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

//因为是一个展示tab 一定是后期有地方王者里面传入数据的
SectionTabs.propTypes = {
  tabNames: PropTypes.array
}


export default SectionTabs