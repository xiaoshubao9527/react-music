import Styled from 'styled-components'

export const PlayerWrapper = Styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 53px;
  zoom: 1;
  background: url(${require('@/assets/img//playbar.png')}) no-repeat 0 9999px;
  background-repeat: repeat-x;
  background-position: 0 0;
  width: 100%;
  z-index: 1002;
  .wrap  {
    margin: 0 auto;
    margin-top: 6px;
    z-index: 15;
    width: 980px;
    height: 47px;
    display: flex;
  }
`

export const PlayerLeft = Styled.div`
  width: 137px;
  padding: 6px 0 0 0;
  display: flex;
  align-items: center;
  a {
    text-indent: -9999px;
    display: inline-block;
  }
  .prev,.next {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    background: url(${require('@/assets/img//playbar.png')}) no-repeat 0 9999px;
  }
  .prev {
    background-position: 0 -130px;
  }
  .play {
    width: 36px;
    height: 36px;
    margin-top: 0;
    background: url(${require('@/assets/img//playbar.png')}) no-repeat 0 9999px;
    background-position: 0 ${props => props.isPlaying ? '-165px' : '-204px'}; 
    margin-right: 8px;
  }
  .next {
    background-position: -80px -130px;
  }
`
export const PlayerMiddle = Styled.div`
display: flex;
  .song-pic {
    width: 34px;
    height: 34px;
    position: relative;
    margin: 6px 15px 0 0;
    img {
      width: 100%;
    }
    a {
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 100%;
      text-indent: -9999px;
      left: 0;
      top: 0;
    }
  }
  .song-info {
    margin-top: 6px;
    .song-name {
      font-size: 12px;
      color: #e8e8e8;
    }
    .song-author {
      color: #9b9b9b;
      font-size: 12px;
      display: inline-block;
      margin-left: 15px;
    }
    .song-progress {
      display: flex;
      align-items: center;
      font-size: 12px;
      .playing-time {
        color: #a1a1a1;
      }
      .total-time {
        color: #797979;
      }
    }
  }
`
export const PlayerRight = Styled.div`
  margin-left: 30px;
  display: flex;
  a {
      width: 25px;
      text-indent: -9999px;
      height: 25px;
      display: inline-block;
      background: url(${require('@/assets/img//playbar.png')}) no-repeat 0 9999px;
  }
  .oper-left {
    display: flex;
    align-items: center;
    width: 60px;
    & :nth-child(1) {
      background-position: -88px -163px;
    }
    & :nth-child(2) {
      background-position: -114px -163px;
    }
  }
  .oper-right {
    display: flex;
    align-items: center;
    & :nth-child(1) {
      background-position: -2px -248px;
    }
    & :nth-child(2) {
      background-position: -3px -344px;
    }
    & :nth-child(3) {
      width: 38px;
      padding-left: 21px;
      background-position: -42px -68px;
      line-height: 27px;
      text-align: center;
      color: #666;
      text-shadow: 0 1px 0 #080707;
      text-indent: 0;
      text-decoration: none;
    }
  }
`