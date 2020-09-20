import Styled from 'styled-components'
export const AppHeaderStyled = Styled.div `
background-color: #242424;
height: 70px;
  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1100px;
    margin: 0 auto;
    height: 100%;
    .header-left {
      display: flex;
      align-items: center;
      .list {
        a {
        display: inline-block;
        height: 70px;
        text-decoration: none;
        color: #ccc;
        font-size: 14px;
        cursor: pointer;
        line-height: 70px;
        padding: 0 19px;
        position: relative;
          &:hover {
            background-color: #000000;
            color: white;
          }
          &.active {
            background-color: #000000;
            color: white;
            i {
              width: 12px;
              height: 7px;
              position: absolute;
              left: 50%;
              bottom: -1px;
              transform: translateX(-50%);
              background: url(${require('@/assets/img/topbar.png')}) no-repeat -226px 0;
            }
          }
        }
        & a:last-of-type{
          i {
            width: 28px;
            height: 19px;
            position: absolute;
            right: -19px;
            top: 21px;
            background: url(${require('@/assets/img/topbar.png')}) no-repeat -190px 0;
          }
        }
      }
      .logo{
        width: 177px;
        height: 69px;
        background:  url(${require('@/assets/img/topbar.png')}) no-repeat;
        a {
          display: inline-block;
          width: 100%;
          text-indent: -9999px;
          display: inline-block;
          height: 100%;
        }
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      .search {
        .ant-input-affix-wrapper {
          border-radius: 32px;
        }
        input {
          width: 140px;
          height: 22px;
          border-radius: 16px;
          font-size: 12px;
          color: #333;
        }
      }
      .center {
        width: 90px;
        height: 32px;
        border-radius: 20px;
        font-size: 12px;
        border: 1px solid #4F4F4F;
        margin-left: 14px;
        cursor: pointer;
        a {
          display: inline-block;
          line-height: 32px;
          width: 100%;
          height: 100%;
          text-align: center;
          color: #ccc;
        }
        &:hover {
          color: white;
          border: 1px solid white;
        }
      }
      .login-font {
        display: inline-block;
        margin-left: 20px;
        font-size: 12px;
        color: #787878;
        text-decoration: underline;
        &:hover {
          color: #999;
        }
      }
    }
  }
`