import Styled from 'styled-components'

export const TopListWrapper = Styled.div``
export const Content = Styled.div`
  height: 472px;
  margin-top: 20px;
  border: 1px solid #d3d3d3;
  a:hover {
    text-decoration: underline;
  }
  ul {
    height: 100%;
    display: flex;
    & :last-child {
      border: none;
    }
    li {
      flex: 1;
      border-right: 1px solid #d3d3d3;
      .top {
          padding-top: 20px;
          padding-left: 19px;
          height: 100px;
          display: flex;
          margin-bottom: 20px;
          .pic {
          width: 80px;
          height: 80px;
          img {
            width:  100%;
          }
        }
        .des {
          padding-top: 6px;
          margin-left: 10px;
          .title  {
            font-size: 14px;
            color: #333;
            font-weight: bold;
            margin-bottom: 10px;
            a {
              color: #333;
            }
          }
          .play,.add {
            display: inline-block;
            width: 22px;
            height: 22px;
            text-indent: -9999px;
          }
          .play {
            background: url(${require('@/assets/img/index.png')}) no-repeat 0 9999px;
            background-position: -267px -205px;
            margin-right: 10px;
          }
          .add {
            background: url(${require('@/assets/img/index.png')}) no-repeat 0 9999px;
            background-position: -300px -205px;
          }
        }
      }
      .list {
        .list-item {
          position: relative;
          height: 32px;
          display: flex;
          span,a {
            display: inline-block;
            line-height: 32px;
            height: 100%;
          }
          span {
            text-align: center;
            width: 35px;
          }
          a {
            width: 170px;
            color: #000;
            font-size: 12px;
          }
          .open {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 86px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            a {
              display: inline-block;
              width: 17px;
              height: 17px;
              text-indent: -9999px;
              background: url(${require('@/assets/img/index.png')}) no-repeat 0 9999px;
            }
            & a:nth-child(1) {
              margin-right: 10px;
              background-position: -267px -268px;
            }
            & a:nth-child(2) {
              background: url(${require('@/assets/img/index.png')}) no-repeat 0 9999px;
              margin-right: 6px;
              background-position: 0 -700px;
            }
            & a:nth-child(3) {
              background-position: -297px -268px;
            }
          }
        }
        .find-more {
          background-color: #E8E8E8;
          height: 32px;
          width: 100%;
          text-align: right;
          a {
            font-size: 12px;
            color: #333;
            line-height: 32px;
            padding-right: 32px;
          }
        }
      }
    }
  }
`