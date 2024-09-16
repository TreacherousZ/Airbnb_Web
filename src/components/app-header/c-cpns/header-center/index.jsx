import React, { memo, useState } from 'react'
import { CenterWrapper } from './style'
import { CSSTransition } from 'react-transition-group'

import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c-cpns/search-tabs'
import SearchTitles from "@/assets/data/search_titles"
import SearchSections from './c-cpns/search-sections'

const HeaderCenter = memo((props) => {
  /* 从父组件中拿到是否为搜索状态的属性,和搜索框点击处理函数 */
  const {isSearch, searchBarClick} =props
  /* 记录点击的哪一个title */
  const [tabIndex , setTabIndex ] = useState(0)
  /* 遍历title */
  const titles = SearchTitles.map(item => item.title)

  /* 点击搜索框事件,此处没法处理，要让父组件处理*/
  function searchBarClickHandle() {
    if(searchBarClick) searchBarClick()
  }

  return (
    <CenterWrapper>
        <CSSTransition
          /* 不搜索的时候显示 */
          in ={ !isSearch }
          classNames ="bar"
          timeout={250}
          /* 动画执行完自动卸载组件 */
          unmountOnExit ={true}
        >
          <div className='search-bar' onClick={ searchBarClickHandle }>
            <div className='text'>
                搜索房源和体验
            </div>

            <span className='icon'>
              <IconSearchBar/>
            </span>
          </div>
        </CSSTransition>
            
        <CSSTransition
          in ={isSearch}
          classNames ="detail"
          timeout={250} //两个组件事件一直
          /* 动画执行完自动卸载组件 */
          unmountOnExit ={true}
        >
        <div className='search-detail'>
          {/* 传入搜索标题 在assets中有模拟数据,包含了title和searchInfos*/}
          <SearchTabs titles ={titles} tabClick ={setTabIndex}/>
          <div className="infos">
            {/* 传入点击对象title的index属性，让SearchSections接收或显示对应数据 */}
            <SearchSections searchInfos ={SearchTitles[tabIndex].searchInfos}/>
          </div>
        </div>
        </CSSTransition>
        
    </CenterWrapper>
  )
})

export default HeaderCenter