import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  //路由配置：npm install react-router-dom
import { Provider } from 'react-redux';
import {ThemeProvider} from "styled-components"

import App from './App';
import "normalize.css" //npm install normalize.css 常见的样式重置
import "./assets/css/index.less"
import store from './store';
import theme from './assets/theme'


// 配置别名 @ => src:webpack
// 问题：react脚手架隐藏webpack
// 解决一：npm run eject(不推荐)
// 解决二：craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
      <Provider store ={store}>
        <Suspense fallback ="loading...">
          <ThemeProvider theme={theme}>
            <HashRouter>
              <App />
            </HashRouter>
          </ThemeProvider>
        </Suspense>
      </Provider>
  //</React.StrictMode> //严格模式下 使用ant design组件会报错，导致搜索状态下，滚动一定距离，蒙版不会自动消失，关闭严格模式后正常
);

