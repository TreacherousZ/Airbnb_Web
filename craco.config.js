const path = require('path')
const CracoLessPlugin = require('craco-less');

//path.resolve(__dirname,pathname)：__dirname表示当前路径，与pathname拼接成绝对路径
const resolve =pathname => path.resolve(__dirname,pathname)
// 配置别名由Node加载，所以要用Node.js的语法
module.exports ={
    /* 配置less 针对cracoV7 :
        (1)github上找到原作者适配问题方案（craco-less）：npm i craco-less@2.1.0-alpha.0
        (2) ant-design网站:使用最多react UI框架,这里面寻找配置方法（在create-react-app中使用） */
    plugins: [
        {
            plugin: CracoLessPlugin
        },
        ],
    // webpack
    webpack:{
        alias:{
            // 前面为别名，后面为路径，要求后面是绝对路径，例如直接写"components": "src/components"，会读成字符串，需要拼接
            "@": resolve("src"),
            "components":resolve( "src/components"),
            "utils": resolve("src/utils"),
        }
    }
}
