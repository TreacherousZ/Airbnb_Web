/* 监听滚动蒙版一定距离，蒙版也会消失 */
import { throttle } from "underscore";
import { useEffect, useState } from "react";

export function useScrollPosition(){
    // 状态来记录位置
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    // 监听window滚动
    useEffect(() =>{
        const handleScroll=throttle(function() {
            /* 每次window滚动，这个函数变化导致APP会频繁刷新，所以用节流 解决办法：npm install underscore ,使用throttle包裹*/
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        },100)

        /* 回调等会还要移除，最好写在外面 */
       /*  window.addEventListener("scroll" ,handleScroll(){}) */
       window.addEventListener("scroll",handleScroll)

       return ()=>{
        window.removeEventListener("scroll",handleScroll)
       }
    },[])

    // 返回状态给别的页面用,返回对象比返回数组好用
    return {scrollX , scrollY}
}