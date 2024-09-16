import  { useScrollPosition } from '@/hooks/useScrollPositon'
import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'

const AppHeader = memo(() => {
  /* 定义组件内部的状态记录一些东西：搜索/非搜索状态 */
  const [isSearch , setIsSearch ] = useState(false)

  /* 从redux中获取数据 */
  const {headerConfig} = useSelector((state)=>({
      headerConfig:state.main.headerConfig
  }),shallowEqual)
  const {isFixed ,  topAlpha} = headerConfig

  /* 监听滚动，使用自己封装好的Hook函数 */
  const { scrollY } = useScrollPosition()
     /* 记录弹出搜索框之前的页面滚动位置，当搜索框弹出之后，再记录滚动的页面位置，二者距离大于一定尺寸，搜索框消失 */
     /* 在正常情况（搜索框没有弹出来），不断记录滚动值  */
  const prevY = useRef(0) //useRef()只要不改变current值，在整个生命周期保持不变
  if(!isSearch) prevY.current = scrollY
    /* 在弹出搜索功能的情况，滚动的距离大于之前记录的距离的30（绝对值相减，向上/下滚 */
/*   if(isSearch && Math.abs(scrollY - prevY.current) > 30) {setIsSearch(false); console.log(isSearch);} */
  if (Math.abs(prevY.current - scrollY) > 30 && isSearch) setIsSearch(false)

  /* 透明度的逻辑 */
    /* 设置一个状态，设定的透明度为true且在头部的时候为true */
  const isAlpha =  topAlpha && scrollY===0

  return (
     <ThemeProvider theme={{isAlpha}}>
            {/* 1.给HeaderWrapper传入属性isAlpha 样式接收props做判断 2.在此处加上样式后头部其他东西都要跟着改变，所以应该把状态也传给其他，于是给整体添加一个组件来包裹TheneProvider嵌套，修改*/}
        <HeaderWrapper className={classNames({ fixed: isFixed })}>
          <div className='content'>
            {/* 增加点击搜索框时content页面变暗有阴影，再增加一个div包裹,然后和content并列添加一个遮盖层cover */}
            <div className="top">
              <HeaderLeft/>
                {/* 在页面顶部的时候isAlpha为ture，而此时一定是搜索状态，所以即透明时候，一定为搜索状态，使用或逻辑 isSearch={isAlpha || isSearch}*/}
              <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick ={e => setIsSearch(true)}/>
              <HeaderRight/>
            </div>
            {/* search-area由于搜索与非搜索状态变化中有动画，所以应该是一直显示，调高度样式 =》把普通div变成组件 这样就可以不用加类，可以直接传递属性*/}
          {/*  <div className='search-area'></div> */}
            <SearchAreaWrapper isSearch={isAlpha || isSearch}/>
          </div>
          {/* 点击蒙版的时候就没有搜索框，搜索状态为false */}
          {isSearch && <div className="cover"  onClick={e => setIsSearch(false)}></div>}
        </HeaderWrapper>
     </ThemeProvider>
  )
})

export default AppHeader