// 引入样式 npm install styled-components
import  styled from "styled-components"

// 三个子组件之间的布局
export const HeaderWrapper = styled.div`
    font-size: 14px;

    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }

    .content {
        position: relative;
        z-index: 19;
        transition: all 250ms ease;
        background-color: ${props =>props.theme.isAlpha ? "rgba(255,255,255,0)" :  "rgba(255,255,255,1)"};
        border-bottom: 1px solid ;
        border-bottom-color: ${props =>props.theme.isAlpha ? "rgba(233,233,233,0)" :  "rgba(233,233,233,1)"};

        .top {
            display: flex;
            align-items: center; //垂直居中
            height: 80px;
        }
    }

    .cover {
        position: fixed;
        z-index: 9;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,.3);
    }
   
`

export const SearchAreaWrapper =styled.div`
    transition: height 250ms ease;
     height: ${props => props.isSearch? "100px":"0"};
`