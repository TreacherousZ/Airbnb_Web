import styled from "styled-components";

export const RoomsWrapper = styled.div`  
    position: relative;
    padding: 30px 20px;
    margin-top: 128px;

    .title {
        font-size: 20px;
        color: #222;
        font-weight: 700;
        margin: 0 0 10px 10px ; //上右下左
    }

    .list {
        display: flex;
        flex-wrap: wrap;
    }

    > .cover { //直接子元素的cover
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(255,255,255,.8);
    }
`