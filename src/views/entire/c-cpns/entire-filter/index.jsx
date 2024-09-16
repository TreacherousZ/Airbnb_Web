import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const[selectItems, setSelectItems] =useState([])

  function itemClickHandle(item){ //移除操作
    const newItems = [...selectItems]
    if(newItems.includes(item)){
      const itemIndex = newItems.findIndex(filterItem => filterItem===item) //寻找第二次点击的东西是否存在已被点击，如果有的话，返回在里面的索引
      newItems.splice(itemIndex,1)
    }else{ //添加操作
      newItems.push(item)
    }

    setSelectItems(newItems)
  }
  
  return (
    <FilterWrapper>
        <div className='filter'>
          {
            filterData.map((item,index)=>{
              return (
                <div 
                  className= {classNames("item",{ active: selectItems.includes(item) })}
                  key={item}
                  onClick = {e =>itemClickHandle(item)}
                >
                  {item}
                </div>
              )
            })
          }
        </div>
    </FilterWrapper>
  )
})

export default EntireFilter