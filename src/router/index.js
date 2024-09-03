import React from 'react'
import { Navigate } from "react-router-dom"
//配置懒加载
const Home = React.lazy(() => import('@/views/home'))
const Entire = React.lazy(() => import('@/views/entire'))
const Detail = React.lazy(() => import('@/views/detail'))
//这些组件在实际渲染时会被懒加载。这意味着在路径匹配时，这些组件会在需要时才异步加载，而不是在应用启动时全部加载。


const routes = [
  { //当默认进来的时候 我们希望他直接进入home页面
    path:'/',
    element: <Navigate to='/home' />
  },
  {
    path:'/home', //路径
    element:<Home/> ,//组件 这个组件可以这样写是因为配置了懒加载 懒加载的时候给他const了什么名字 这里就写什么
  },
  {
    path:'/entire',
    element:<Entire/>
  },
  {
    path:'/detail',
    element:<Detail/>
  }
]

export default routes