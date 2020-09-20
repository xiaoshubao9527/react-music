import React, { memo } from 'react'
import {AlbumCoverWrapper} from './style'
export default memo(function AlbumCover(props) {
    const {picUrl, name, albumName} = props;
    return (
        <AlbumCoverWrapper width={props.width} size={props.size}>
            <div className="pic">
                <img src={picUrl} alt={name} title={name} />
                <a href="todo">1111</a>
            </div>
            <a className="album-name" href="/todo">{albumName}</a>
            <a className="name" href="/todo">{name}</a>
        </AlbumCoverWrapper>
    )
})
