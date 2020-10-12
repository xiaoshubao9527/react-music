import {Map} from 'immutable'
import {CHANGE_PLAY_SONG_DETAIL_INFO, CHANGE_PLAY_SONG_URL, CHANGE_PLAY_SONG_LIST, CHANGE_CURRENT_PLAY_SONG_INDEX, CHANGE_CURRENT_PATTERN, CHANGE_SONG_LYRIC} from './constant'
const defaultState = Map({
  playSongDetailInfo: {}, // 当前播放歌曲的详细信息
  playSongUrl: {}, // 当前播放歌曲的url
  currentPlaySongIndex: 0, // 当前播放歌曲在播放列表中的索引
  playSongList: [], // 要播放的歌曲列表
  currentPattern: 0, // 当前播放的模式 0顺序循环 1随机播放 2单曲循环\
  songLyric: [], // 歌词 
})
export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case CHANGE_PLAY_SONG_DETAIL_INFO:
      return state.set('playSongDetailInfo', action.playSongDetailInfo)
    case CHANGE_PLAY_SONG_URL:
      return state.set('playSongUrl', action.playSongUrl)
    case CHANGE_PLAY_SONG_LIST:
      return state.set('playSongList', action.playSongList)  
    case CHANGE_CURRENT_PLAY_SONG_INDEX:
      return state.set('currentPlaySongIndex', action.currentPlaySongIndex)
    case CHANGE_CURRENT_PATTERN:
      return state.set('currentPattern', action.currentPattern)
    case CHANGE_SONG_LYRIC:
      return state.set('songLyric', action.lyric)          
    default:
      return state;
  }
}