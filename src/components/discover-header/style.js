import Styled from 'styled-components'
export const DiscoverHeaderStyled = Styled.div `
  background-color: #C20C0C;
  height: 37px;
  .discover-header-wrap {
    height: 100%;
    width: 1100px;
    margin: 0 auto;
    padding-left: 180px;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 12px;
    padding: 0 30px;
    display: inline-block;
    height: 100%;
    line-height: 34px;
    & span:hover {
        background: #9B0909;
      }
    &.active span {
      background: #9B0909;
    }
    span {
      padding: 0px 13px 2px;
      display: inline-block;
      height: 23px;
      border-radius: 20px;
      line-height: 22px;
    }
  }
`