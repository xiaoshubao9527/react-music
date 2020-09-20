import Styled from 'styled-components'

export const BannersWrapper = Styled.div`
    height: 285px;
    background: url(${props => props.bgImage}) center center/6000px;
    overflow: hidden;
`
export const Banner = Styled.div`
    width: 982px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    & .download {
        cursor: pointer;
        width: 254px;
        height: 100%;
        position: absolute;
        right: 0;
        top:0;
        img {
            width: 100%;
        }
    }
`
export const PicWrapper = Styled.div`
    width: 730px;
    .pic {
    height: 285px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .ant-carousel {
        ul {
            li {
                &.slick-active {
                    button {
                        background-color: red !important; 
                    }
                }
                button {
                    width: 6px !important;
                    height: 6px !important;
                    border-radius: 50%;
                    &:hover {
                        background-color: red !important;
                    }
                }
            }
        }
    }
`
export const BannerBtn = Styled.div`
    .btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 37px;
        height: 63px;
        background-color: blue;
        cursor: pointer;
        background: url(${require('@/assets/img/banner.png')}) 0 9999px no-repeat;
        &:hover {
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
    .left-btn {
        left: -68px;
        background-position: 0 -360px;
    }
    .right-btn {
        right: -68px;
        background-position: 0 -508px;
    }
`