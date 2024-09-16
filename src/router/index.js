import Demo from "@/views/demo"
import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(()=>import("@/views/home")) //页面懒加载
const Entire = React.lazy(()=>import("@/views/entire")) //页面懒加载
const Detail= React.lazy(()=>import("@/views/detail")) //页面懒加载

const routes =[
    // 进入的时候是空路径，希望默认挑战home页
    {
        path:"/",
        element:<Navigate to="/home"/>
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/entire",
        element:<Entire/>
    },
    {
        path:"/detail",
        element:<Detail/>
    },
    {
        path:"/demo",
        element:<Demo/>
    },
]

export default routes