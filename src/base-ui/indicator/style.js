import styled from "styled-components";

export const IndicatorWrapper = styled.div`
    overflow: hidden;

    .i-content {
        display: flex;
        position: relative;
        transition: transform 250ms ease;

        > *{
            flex-shrink: 0; //所有后代直接子元素
        }
        
    }
`