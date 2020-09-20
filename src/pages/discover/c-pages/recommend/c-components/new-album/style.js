import Styled from 'styled-components'
export const NewAlbumWrapper = Styled.div``
export const Content = Styled.div`
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .big-box {
        position: relative;
    }
`
export const Banner = Styled.div`
    width: 654px;
    margin-top: 28px;
    .carousel-box {
        display: flex !important;
        justify-content: space-between;
        padding-left: 37px;
        overflow:  hidden;
    }
`
export const BannerBtn = Styled.div`
    .btn {
        top: 40%;
        cursor: pointer;
        position: absolute;
        width: 17px;
        height: 17px;
        background: url(${require('@/assets/img/index.png')}) no-repeat 0 9999px;
    }
    .left-btn {
        left: 10px;
        background-position: -260px -75px;
    }
    .right-btn {
        right: 10px;
        background-position: -300px -75px;
    }
`