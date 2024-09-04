import styled from "styled-components";


export const LeftWrapper = styled.div`
flex: 1px;
display: flex;
color: ${props => props.theme.color.primaryColor}; //svg log的颜色


.logo {
  margin-left: 24px;
  cursor: pointer;
}
`