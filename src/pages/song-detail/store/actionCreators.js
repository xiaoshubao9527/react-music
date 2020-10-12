import { CHANGE_PLAY_SONG_DETAIL_INFO, CHANGE_PLAY_SONG_URL, CHANGE_CURRENT_PLAY_SONG_INDEX ,CHANGE_CURRENT_PATTERN, CHANGE_PLAY_SONG_LIST, CHANGE_SONG_LYRIC } from "./constant"
import {getPlaySongDetailInfo, getPlaySongUrl, getPlaySongLyric} from '@/service/songDetailInfo'
import {formateLyric} from '@/utils/formate-data'
export const changePlaySongDetailInfoAction = (playSongDetailInfo)=> ({type: CHANGE_PLAY_SONG_DETAIL_INFO, playSongDetailInfo})
export const changePlaySongUrlAction = (playSongUrl)=> ({type: CHANGE_PLAY_SONG_URL, playSongUrl})
export const changeCurrentPlaySongIndexAction = (currentPlaySongIndex) => ({type: CHANGE_CURRENT_PLAY_SONG_INDEX, currentPlaySongIndex}) 
export const changePlaySongListAction = (playSongList) => ({type: CHANGE_PLAY_SONG_LIST, playSongList}) 
export const changeCurrentPatternAction = (currentPattern) => ({type: CHANGE_CURRENT_PATTERN, currentPattern}) 
export const changeSongLyricAction = (lyric) => ({type: CHANGE_SONG_LYRIC, lyric}) 

// 获取歌曲信息
export const getPlaySongDetailInfoAction = (ids) => {
  return async (dispatch, getState) => { // 先查找当前播放歌曲中是否在播放列表中
    const playSongList = getState().getIn(['songDetail', 'playSongList']);
    const currentIndex = playSongList.findIndex(item => item.id === ids);
    if (currentIndex !== -1) { // 在播放列表中则 则不添加到播放列表中 找到对应的索引改变
      dispatch(changePlaySongDetailInfoAction(playSongList[currentIndex]))
      dispatch(changeCurrentPlaySongIndexAction(currentIndex))
    } else {
      const result = await getPlaySongDetailInfo(ids)
      if(result.songs && result.code === 200)  {
        const newPlaySongList = [...playSongList]
        newPlaySongList.push(result.songs[0])
        dispatch(changePlaySongDetailInfoAction(result.songs[0]))
        dispatch(changeCurrentPlaySongIndexAction(newPlaySongList.length - 1))
        dispatch(changePlaySongListAction(newPlaySongList))
      }
    }
    dispatch(getPlaySongUrlAction(ids))
    dispatch(getSongLyricAction(ids))
  }
}
// 获取歌曲的url
export const getPlaySongUrlAction = (id) => {
  return async dispatch => {
    const result = await getPlaySongUrl(id)
    if(result.data && result.code === 200)  {
      dispatch(changePlaySongUrlAction(result.data[0]))
    }
  }
}
// 上一首，下一首 
export const changeSongIndex = (number) => {
  return (dispatch, getState) => {
    const playSongList = getState().getIn(['songDetail', 'playSongList']);
    const playSongListLength = playSongList.length;
    const currentPlaySongIndex = getState().getIn(['songDetail', 'currentPlaySongIndex']);
    const currentPattern = getState().getIn(['songDetail', 'currentPattern']);
    let index = 0;
    switch(currentPattern) { // 0顺序循环 1随机播放 2单曲循环 
      case 0:
        index = currentPlaySongIndex + number;
        if (index>=playSongListLength) index = 0;
        if (index<0) index = playSongListLength - 1;
        break;
      case 1:
        index = Math.floor(Math.random() * playSongListLength)
        break;
      case 2:
        index = currentPlaySongIndex;
        break;
        default:
    }
    dispatch(changePlaySongDetailInfoAction(playSongList[index]))
    dispatch(getPlaySongUrlAction(playSongList[index].id))
    dispatch(changeCurrentPlaySongIndexAction(index));
    dispatch(getSongLyricAction(playSongList[index].id))
  }
}
// 获取歌词信息
export const getSongLyricAction = (id) => {
  return async dispatch => {
    const result = await getPlaySongLyric(id)
    if (result && result.code === 200) {
      const newLyric = formateLyric(result.lrc.lyric)
      dispatch(changeSongLyricAction(newLyric))
    }
  }
}