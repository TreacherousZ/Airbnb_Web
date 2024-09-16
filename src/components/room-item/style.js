import styled from "styled-components";

export const ItemWrapper = styled.div`
    flex-shrink: 0; //每个item不被压缩
    /* width: 25%; //每一行展示4个 则让每一个宽度占25%（实际后面有的是5个 可以让其动态） */
    width: ${props =>props.itemWidth};
    padding:8px;
    box-sizing: border-box;

    .inner {
        width: 100%;
    }

    .cover {
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 8px 0; //由于有的Img高度不一样，对不起，故设置padding-top为宽度的0.66，左右给8，目的就是把它撑起来，在没图片的情况下也能对齐
        border-radius: 3px;
        overflow: hidden;

        > img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .slider {
        position: relative;
        cursor: pointer;
        
        &:hover {
            .control {
                display: flex;
            }
        }

        .control {
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            display: none;
            justify-content: space-between;
            bottom: 0;
            color: #fff;
            /* background-color: skyblue; */

            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 83px;
                height: 100%;
                background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

                &.right {
                    background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
                }
            }
        }

        .indicator {
            position: absolute;
            z-index: 9;
            width: 30%;
            left: 0;
            right: 0;
            bottom: 10px;
            margin: 0 auto;
            .dot-item {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 20%; //显示5个点 7个点： 14.29%

                .dot{
                    width: 6px;
                    height: 6px;
                    background-color: #fff;
                    border-radius: 50%;

                    &.active {
                        width: 8px;
                        height: 8px;
                    }
                }
            }
        }
    }

    img {
        position: absolute; //绝对定义让图片把padding撑起来覆盖
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; //保证图片不被压缩，清晰度高
     }

     .desc {
        margin: 10px 0 5px;
        font-size: 12px;
        font-weight: 700;

        color: ${props => props.verifyColor}; //动态拿到颜色
     }

     .name {
        font-size: 16px;
        font-weight: 700;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
     }

     .price {
        margin: 8px 0;
     }

     .bottom {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        color: ${props => props.theme.textColor.primaryColor};

        .count {
        margin: 0 2px 0 4px;
        }

        .MuiRating-decimal {
        margin-right: -2px;
        }
    }
`