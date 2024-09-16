import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LongforItem = memo((props) => {
    const {itemData} = props
  return (
    <ItemWrapper>
        {/* //为了保证内间距,这里设置左右间距，然后在父级搞个－左右间距 */}
       <div className='inner'> 
             {/* //嵌套同时设置圆角 */}
           <div className='item-info'> 
            <img className='cover' src={itemData.picture_url} alt="" />
                {/* //给每张图片下半截蒙上半透明图片 */}
                <div className='bg-cover'></div> 
                <div className='info'>
                    <div className='city'>{itemData.city}</div>
                    <div className='price'>均价 {itemData.price}</div>
                </div>  
           </div>
       </div>    
    </ItemWrapper>
  )
})

LongforItem.propTypes = {
    itemData : PropTypes.object
}

export default LongforItem