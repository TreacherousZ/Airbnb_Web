import styled from "styled-components";

export const TabsWrapper = styled.div`
    /* display: flex;  */
    //color: ${props => props.theme.isAlpha ?"#fff": "#222"};
   

    .item {
    box-sizing: border-box;
    flex-basis: 120px; //设置最小宽度
    flex-shrink: 0; //不要压缩，超出范围也不要压缩
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    white-space: nowrap; //不要换行
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}; //阴影

    &:last-child {
      margin-right: 0;
    }

    &.active { //同时有actives类名的时候
      color: #fff;
      background-color: ${props =>props.theme.color.secondayColor};
     /* background-color: ${props => props.theme.isAlpha? "#fff" :"#333"} */
    }
  }
`