import Styled from 'styled-components'

export const RecommendThemeHeaderWrapper = Styled.div`
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 0px;
    border-bottom: 2px solid #C10D0C;
    .left {
        display: flex;
        align-items: center;
        .title {
            color: #333;
            font-size: 20px;
            margin-left: 10px;
            margin-right: 20px;
            position: relative;
            top: -2px;
        }
        ul {
            display: flex;
            align-items: center;
            li {
                font-size: 12px;
                color: #666;
                .line {
                    margin: 0 10px;
                    font-size: 12px;
                    color: #ccc;
                }
            }
        }
        i {
            background: url(${require("@/assets/img/index.png")}) no-repeat 0 9999px;
            display: inline-block;
            width: 24px;
            height: 24px;
            background-position: -225px -159px;
        }
    }
    .right {
        span {
            font-size: 12px;
            color: #666;
        }
        i {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 4px;
            vertical-align: middle;
            background: url(${require("@/assets/img/index.png")}) no-repeat 0 9999px;
            background-position: 0 -240px;
        }
    }
`