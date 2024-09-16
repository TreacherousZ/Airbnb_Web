import styled from "styled-components";

export const BrowserWrapper = styled.div`
    position: fixed;
    z-index: 999; //-1 1 9 99 999
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column; 
    //图片浏览器分为上中下三部分，可以发现上下都是固定高度，中间图片部分会放缩，(top content indicator)
    //则方法：flex布局，设置flex方向为column,然后中间部分content设置flex:1
    background-color: rgb(33,33,33);
    opacity: 1;

    .top {
        position: relative;
        height: 86px;

        .close-btn {
            position: absolute;
            top: 15px;
            right: 25px;
            cursor: pointer;
        }
    }

    .slider{
        position: relative; //一定要加，不然箭头就会把第一部分的关闭按钮覆盖
        display: flex;
        flex: 1;
        justify-content: center; //居中
        align-items: center;
        overflow: hidden;

        .control {
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            bottom: 0;
            color: #fff;

            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 83px;
                height: 100%;
                cursor: pointer;
            }
       }

       .picture {
            position: relative;
            height: 100%;
            overflow: hidden;
            width: 100% !important;
            max-width: 105vh !important; //做大宽度与高度有关

            img {
                position: absolute; //绝对定位让图片居中
                top: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                height: 100%;
                user-select: none;
            }

            /* 动画样式 */
            .pic-enter {
                transform: translate(${props =>props.isNext? "100% ": "-100%"}); //translate移动是相对于自身，则全移动过去
                opacity: 0;
            }

            .pic-active {
                transform: translate(0);
                opacity: 1;
                transition: all 200ms ease;
            }

            .pic-exit {
                opacity: 1;
            }

            .pic-exit-active {
                opacity: 0;
                transition: all 200ms ease;
            }
        }
    }

   


    .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    
    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease; //高度变化的过度动画
        height: ${props => props.showList? "67px" :"0"};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`