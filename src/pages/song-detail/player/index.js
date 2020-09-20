import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import { Slider } from 'antd';

import {
  PlayerWrapper, 
  PlayerLeft, 
  PlayerMiddle, 
  PlayerRight
} from './style'
import {getPlaySongDetailInfoAction, getPlaySongUrlAction} from '../store/actionCreators'
import {getImageSize, formateTime} from '@/utils/formate-data'

export default memo(function Player() {
  // redux-hooks
  const dispatch = useDispatch()
  const {playSongDetailInfo, playSongUrl} = useSelector(state => ({
    playSongDetailInfo: state.getIn(['songDetail','playSongDetailInfo']),
    playSongUrl: state.getIn(['songDetail','playSongUrl'])
  }), shallowEqual)

  //other-hooks
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [isUpdateAudioTime, setIsUpdateAudioTime] = useState(true)
  useEffect(() => {
    dispatch(getPlaySongDetailInfoAction(167876))
    dispatch(getPlaySongUrlAction(167876))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = playSongUrl.url
  }, [playSongUrl])
  // 其他逻辑代码
  const songName = playSongDetailInfo.songName
  const songAuthor = playSongDetailInfo.ar && playSongDetailInfo.ar[0].name
  const songPic = playSongDetailInfo.al && playSongDetailInfo.al.picUrl
  const totalTime = playSongDetailInfo.dt
  // 点击播放按钮
  const playMusic = useCallback(() => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])
  // 歌曲播放回调
  const audioTimeUpdate = useCallback((e) => {
    if (isUpdateAudioTime) {
      setCurrentTime(e.target.currentTime * 1000);
      setSliderValue(currentTime / totalTime * 100);
    }
  }, [isUpdateAudioTime, currentTime, sliderValue, totalTime])
  // 滑动滑块回调
  const handleSliderChange = useCallback((value) => {
    setSliderValue(value)
    setCurrentTime(value * totalTime / 100);
    setIsUpdateAudioTime(false);
  }, [sliderValue, currentTime, isUpdateAudioTime, totalTime])
  // 滑鼠标动抬起的回调
  const handleSliderAfterChange = useCallback((value) => {
    setCurrentTime(value * totalTime / 100)
    audioRef.current.currentTime = (value * totalTime / 100) / 1000;
    setIsUpdateAudioTime(true);
  }, [currentTime, isUpdateAudioTime, totalTime])
  return (
    <PlayerWrapper>
      <div className="wrap">
        <PlayerLeft isPlaying={isPlaying}>
          <a href="#/" className="prev">上一首</a>
          <a href="#/" className="play" onClick={e => {
            e.preventDefault()
            playMusic()
          }}>播放</a>
          <a href="#/" className="next">下一首</a>
        </PlayerLeft>
        <PlayerMiddle>
          <div className="song-pic">
            <img src={getImageSize(songPic, 35)} />
            <a href="/todo">跳转</a>
          </div>
          <div className="song-info">
            <p>
              <a href="/todo" className="song-name">{songName}</a>
              <a href="/todo" className="song-author">{songAuthor}</a>
            </p>
            <div className="song-progress">
              <Slider 
                defaultValue={0}
                value={sliderValue} 
                style={{ width: '493px'}}
                onChange={e => handleSliderChange(e)}
                onAfterChange={e => handleSliderAfterChange(e)}
              />
              <div className="progress-time">
                <span className="playing-time">{formateTime(currentTime)}</span>
                <span>/</span>
                <span className="total-time">{formateTime(totalTime)}</span>
              </div>
            </div>
          </div>  
        </PlayerMiddle>
        <PlayerRight>
          <div className="oper-left">
            <a href="/todo">1</a>
            <a href="/todo">2</a>
          </div>
          <div className="oper-right">
            <a href="/todo">3</a>
            <a href="/todo">4</a>
            <a href="/todo">5</a>
          </div>
        </PlayerRight>
      </div>
      <audio ref={audioRef} onTimeUpdate={audioTimeUpdate} />
    </PlayerWrapper>
  )
})
