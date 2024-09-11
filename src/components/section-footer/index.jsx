import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
  const { name } = props
  
  let showMEssage = '显示全部'
  if(name) {
    showMEssage = `显示更多${name}房源` //从页面中拿到信息
  } 

  return (
    // 如果为显示xxx的房源就蓝色
    <FooterWrapper color={name ? '#00848A': '#000'}> 
      <div className='info'>
        <span className='text'>{showMEssage}</span>
        <span className='icon'>
          <IconMoreArrow />
        </span>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter