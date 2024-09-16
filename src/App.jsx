import React, { memo} from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import useScrollTop from './hooks/useScrollTop'
import routes from './router'

const App = memo(() => {
  /* 每次点击跳转页面，页面都自动回到顶部 useLocation.pathname:监听跳转路径 函数在hooks中*/
  useScrollTop()

  return (
    <div className='app'>
      <AppHeader/>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <AppFooter/>
      <div className='footer'>footer</div>
    </div>
  )
})

export default App
