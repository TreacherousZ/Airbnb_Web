import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
    const { name } =props

    let showMessage ="显示全部"
    if(name) {
        showMessage =`显示更多${name}房源`
    }
    
    /* 事件处理的逻辑（跳转详情页） */
        /* 路由跳转：从路由里面拿到hook */
    const navigate =useNavigate()
    function moreClickHandle(){
        navigate("/entire")
    }

  return (
    <FooterWrapper color={name ? "#00848A":"#000"} >
        {/* 如果各个部分的显示更多等点击事件挑战的页面一样，就可直接在此组件中建立一个函数，如果不一样，可以在每个用到SectionFooter组件的地方传入一个函数回调执行 */}
        <div className='info' onClick={moreClickHandle}> 
            <span className='text'>{showMessage}</span>
            <IconMoreArrow/>
        </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter