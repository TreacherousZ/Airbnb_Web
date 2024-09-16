import axios from "axios"; //使用axios进行网络请求配置，并进行二次封装 npm instal axios
import { BASE_URL,TIMEOUT } from "./config";
class HYRequest {
    constructor( baseURL,timeout ){ //每个实例最好单独创造一个this.instance
        this.instance = axios.create({
            baseURL,
            timeout  //超时时间
        })

        // 响应拦截
        this.instance.interceptors.response.use((res) =>{
            return res.data //响应成功的拦截，请求成功则拿到data数据
        },err =>{
            return err
        })
    }

    request(config) { //请求方法
        return this.instance.request(config)
    }

    get(config){ //get请求方法
        return this.request({...config,method:"get"})
    }

    post(config){ //post请求方法
        return this.request({...config,method:"post"})
    }
}

export default new HYRequest( BASE_URL,TIMEOUT) 
//导出的时候应该是new一个实例,如果有另外的地址就再导出创建一个实例即可