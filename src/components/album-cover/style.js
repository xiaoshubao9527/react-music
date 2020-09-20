import Styled from 'styled-components'
export const AlbumCoverWrapper = Styled.div`
    width: ${props => props.size};
    height: 150px;
    display: inline-block;
    .pic {
        width: ${props => props.width};
        height: ${props => props.width};
        margin-bottom: 7px;
        position: relative;
        img {
            width: 100%;
        }
        a {
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
            width: ${props => props.size};
            height: ${props => props.width};
            background: url(${require('@/assets/img/coverall.png')}) no-repeat;
            background-position: 0 -570px;
            text-indent: -9999px;
        }
    }
    .album-name {
        font-size: 12px;
        color: #000;
        display: block;
        &:hover {
            text-decoration: underline;
        }
    }
    .name {
        font-size: 12px;
        color: #666;
        &:hover {
            text-decoration: underline;
        }
    }
`