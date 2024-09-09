import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props //从外部传入的数据在这里拿到

  return (
    <ItemWrapper 
    verifyColor={itemData?.verify_info?.text_color || '#39576a'}
    itemWidth={itemWidth}>
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} />
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join('·')}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>
        <div className='buttom'>
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData?.bottom_info && <span className='extra'>·{itemData?.bottom_info?.content}</span>

          }
        </div>
      </div>
    </ItemWrapper> //展示
  )
})

RoomItem.propTypes = {  //从外部传入进来的数据
  itemData: PropTypes.object,
  itemWidth:PropTypes.object
}

export default RoomItem