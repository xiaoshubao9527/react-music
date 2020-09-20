import Styled from 'styled-components'

export const RecommendWrapper = Styled.div``

export const Content = Styled.div`
    width: 980px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background: url(${require("@/assets/img/wrap1.png")}) repeat-y 100% 100%;
    display: flex;
`
export const ContetLeft = Styled.div`
    width: 729px;
    .content-left-wrapper {
        padding: 20px 20px 40px;
    }
`
export const ContetRight = Styled.div`
    width: 250px;
`