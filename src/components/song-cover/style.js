import Styled from 'styled-components'
export const SongCoverWrapper = Styled.div`
    width: 140px;
    margin-bottom: 30px;
    .song-pic {
        height: 140px;
        width: 100%;
        position: relative;
        img {
           width: 100%;
           cursor: pointer;
        }
        .cover {
            font-size: 12px;
            color: #ccc;
            height: 27px;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 0 10px;
            div {
                display: flex;
                align-items: center;
            }
            .listen {
                margin-right: 5px;
                display: inline-block;
                width: 14px;
                height: 11px;
                background: url(${require('@/assets/img/iconall.png')})  no-repeat;
                background-position: 0 -24px;
            }
            .play {
                width: 16px;
                height: 17px;
                background-position: 0 0;
                background: url(${require('@/assets/img/iconall.png')})  no-repeat;
            }
        }
    }
    .song-title {
        font-size: 14px;
        color: #000;
        margin: 12px 0;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    .song-source {
        font-size: 12px;
        color: #666;
        display: flex;
        span {
            margin-right: 6px;
            position: relative;
            top: -2px;
        }
        p {
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`