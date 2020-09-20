import Styled from 'styled-components'
export const AppFooterStyled = Styled.div`
    position: relative;
    height: 172px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
    .content {
        display: flex;
        justify-content: space-between;
        width: 980px;
        margin: 0 auto;
        padding-top: 15px;
        .content-left {
            .link {
                a {
                    font-size: 12px;
                    color: #999;
                }
                .line {
                    margin: 0 8px 0 10px;
                    color: #c2c2c2;
                    font-size: 12px;
                }
            }
            .copy-right {
                font-size: 12px;
                margin-top: 10px;
                display: flex;
                span {
                    display: inline-block;
                    margin-right: 14px;
                }
                a {
                    color: #666;
                }
                & a:hover {
                    text-decoration: underline;
                }
                .police {
                    margin-left: 14px;
                    display: flex;
                    align-items: center;
                }
            }
        }
        .content-right {
            margin-top: 18px;
            ul {
                display: flex;
                li {
                    text-align: center;
                    font-size: 12px;
                    width: 84px;
                    a {
                        width: 50px;
                        height: 45px;
                        background: url(${require('@/assets/img/foot_enter_new.png')}) no-repeat;
                        background-size: 110px 552px;
                        display: inline-block;
                        text-indent: 9999px;
                        margin-bottom: 6px;
                        &.one {
                            background-position: -63px -456.5px;
                        }
                        &.two {
                            background-position: -63px -101px;
                        }
                        &.three {
                            background-position: 0 0;
                        }
                        &.four {
                            background-position: -60px -50px;
                        }
                        &.five {
                            background-position: 0 -101px;
                        }
                    }
                    p {
                        color: #666;
                    }
                }
            }
        }
    }
`