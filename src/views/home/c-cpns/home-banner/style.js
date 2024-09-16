import styled from "styled-components";
import coverImg  from "@/assets/image/cover_01.jpeg"

export const BannerWrapper = styled.div`
    height: 529px;
    /* react中动态引入图片，webpack对于字符串路径无效，需要把图片import */
    /* 也可以：background-image: url(${require("@/assets/image/cover_01.jpeg")}) */
    background: url(${coverImg})  center/cover;
`