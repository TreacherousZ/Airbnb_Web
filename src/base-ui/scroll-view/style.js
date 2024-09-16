import styled from "styled-components";


export const ViewWrapper = styled.div`
  position: relative; //子绝父相 负责不会一排
  padding: 8px 0;

  .scroll {
    overflow: hidden; //对content多一层div包裹，设置hidden，让箭头不hidden

    .scroll-content {
      display: flex;
      transition: transform 250ms ease; //动画
    }
  }

  .control {
    position: absolute;
    z-index: 9; //箭头在最上层
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14); //阴影
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}; //动画阴影

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%); //如何居中在圆圈里？先top50%，载移动50%
     
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`