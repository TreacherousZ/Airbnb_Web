import styled from "styled-components"

export const RightWrapper = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end; //靠右
    align-items: center;
    color: ${props => props.theme.textColor.primaryColor};
    font-size: 14px;
    font-weight: 600;

    .btns {
        display: flex;
        align-items: center;
        color: ${props => props.theme.isAlpha ? "#fff": props.theme.textColor.primaryColor};
        

        .btn {
            height: 18px;
            line-height: 18px;
            padding: 12px 15px;
            box-sizing: content-box;
            cursor: pointer;
            border-radius: 22px;

            &:hover {
                background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)": "#f5f5f5"};
            }
        }
    }

    .profile {
        position: relative;
        display: flex;
        align-items: center;
        width: 77px;
        height: 42px;
        margin-right: 24px;
        justify-content: space-evenly;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 25px;
        background-color: #fff;
        /* color: ${props =>props.theme.textColor.primaryColor}; */
        color: #999;
        cursor: pointer;

        /* 动画效果，发现其他地方也有此种动画，所以可以弄成公共的 */
        ${props=>props.theme.mixin.boxShadow}

        .panel {
            position: absolute;
            top: 54px;
            right: 0;
            width: 240px; //高度由内容撑起来，不用给
            background-color: #fff;
            box-shadow: 0 0 6px rgba(0,0,0,.18);
            border-radius: 10px;

            .top, .buttom{
                padding: 10px 0;

                .item {
                    height: 40px;
                    line-height: 40px;
                    padding: 0 16px;

                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
            }

            .top {
                border-bottom: 1px solid #ddd;
            }
        }

    }
`