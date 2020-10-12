import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import { Slider } from 'antd';

import {
  PlayerWrapper, 
  PlayerLeft,
  PlayerMiddle,
  PlayerRight,
  ShowLyricWrapper
} from './style'
import {getPlaySongDetailInfoAction, changeCurrentPatternAction, changeSongIndex, getSongLyricAction} from '../store/actionCreators'
import {getImageSize, formateTime} from '@/utils/formate-data'

export default memo(function Player() {
  // redux-hooks
  const dispatch = useDispatch()
  const {playSongDetailInfo, playSongUrl, currentPattern, songLyric} = useSelector(state => ({
    playSongDetailInfo: state.getIn(['songDetail','playSongDetailInfo']),
    playSongUrl: state.getIn(['songDetail','playSongUrl']),
    currentPattern: state.getIn(['songDetail','currentPattern']),
    songLyric: state.getIn(['songDetail', 'songLyric'])
  }), shallowEqual)

  // other-hooks
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [isUpdateAudioTime, setIsUpdateAudioTime] = useState(true)
  const [lyric, setLyric] = useState('')
  useEffect(() => {
    dispatch(getPlaySongDetailInfoAction(167876))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = playSongUrl.url
    audioRef.current.play()
    .then(res => {
      setIsPlaying(true)
    })
    .catch(err => {
      setIsPlaying(false)
    })
  }, [playSongUrl])
  // 获取歌词
  useEffect(() => {
    dispatch(getSongLyricAction(167876))
  }, [dispatch])
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
  // 点击上一首和下一首的按钮
  const clickPlayMusic = (e, number) => {
    e.preventDefault()
    dispatch(changeSongIndex(number));
  }
  // 歌曲播放中的回调
  const audioTimeUpdate = useCallback((e) => {
    const newCurrentTime = e.target.currentTime * 1000
    const index = songLyric.findIndex(item => item.time > newCurrentTime)
    if (index !== -1) {
      setLyric(songLyric[index - 1].lyric)
    }
    if (isUpdateAudioTime) {
      setCurrentTime(newCurrentTime);
      setSliderValue(currentTime / totalTime * 100);
    }
  }, [isUpdateAudioTime, currentTime, sliderValue, totalTime])
  // 歌曲播放结束的回调
  const audioEnd = useCallback(() => {
    dispatch(changeSongIndex(1));
  }, [dispatch])
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
    if (!isPlaying) {
      playMusic()
    }
  }, [currentTime, isUpdateAudioTime, totalTime])

  // 点击切换播放歌曲的模式
  const switchPattern = (e) => {
    e.preventDefault()
    dispatch(changeCurrentPatternAction((currentPattern + 1) % 3));
  }
  return (
    <PlayerWrapper>
      <div className="wrap">
        <PlayerLeft isPlaying={isPlaying}>
          <a href="/to" className="prev" onClick={e => clickPlayMusic(e, -1)}>上一首</a>
          <a href="#/" className="play" onClick={e => {
            e.preventDefault()
            playMusic()
          }}>播放</a>
          <a href="/to" className="next" onClick={e => clickPlayMusic(e, 1)}>下一首</a>
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
        <PlayerRight currentPattern={currentPattern}>
          <div className="oper-left">
            <a href="/todo">1</a>
            <a href="/todo">2</a>
          </div>
          <div className="oper-right">
            <a href="/todo">3</a>
            <a href="/todo" onClick={e => switchPattern(e)}>4</a>
            <a href="/todo">5</a>
          </div>
        </PlayerRight>
      </div>
      <audio ref={audioRef} onTimeUpdate={audioTimeUpdate} onEnded={audioEnd} />
      <ShowLyricWrapper>
        {lyric}
      </ShowLyricWrapper>
    </PlayerWrapper>
  )
})
