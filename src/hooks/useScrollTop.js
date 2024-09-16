/* 页面跳转自动回到页面顶部 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export default function useScrollTop(){
    const location =useLocation()
    useEffect(() =>{
      window.scrollTo(0, 0)
    },[useLocation.pathname])
}