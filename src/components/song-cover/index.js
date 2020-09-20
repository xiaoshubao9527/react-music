import React, { memo } from 'react'

import {getImageSize, formatePlayNumber} from '@/utils/formate-data'

import {SongCoverWrapper} from './style'
export default memo(function SongCover(props) {
    const {name, copywriter, picUrl, playCount} = props
    return (
        <SongCoverWrapper>
            <div className="song-pic">
                <img src={getImageSize(picUrl)} alt={name} title={name} />
                <div className="cover">
                    <div>
                        <i className="listen"></i>
                        <span>{formatePlayNumber(playCount)}</span>
                    </div>
                    <i className="play"></i>
                </div>
            </div>
            <h4 className="song-title text-overflow">{name}</h4>
            <div className="song-source text-overflow">
                <span>by</span>
                <p>{copywriter}</p>
            </div>
        </SongCoverWrapper>
    )
})
