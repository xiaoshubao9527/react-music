import { CHANGE_PLAY_SONG_DETAIL_INFO, CHANGE_PLAY_SONG_URL } from "./constant"
import {getPlaySongDetailInfo, getPlaySongUrl} from '@/service/songDetailInfo'
export const changePlaySongDetailInfoAction = (playSongDetailInfo)=> ({type: CHANGE_PLAY_SONG_DETAIL_INFO, playSongDetailInfo})
export const changePlaySongUrlAction = (playSongUrl)=> ({type: CHANGE_PLAY_SONG_URL, playSongUrl})

export const getPlaySongDetailInfoAction = (ids) => {
  return async dispatch => {
    const result = await getPlaySongDetailInfo(ids)
    if(result.code === 200)  {
      dispatch(changePlaySongDetailInfoAction(result.songs[0]))
    }
  }
}
export const getPlaySongUrlAction = (id) => {
  return async dispatch => {
    const result = await getPlaySongUrl(id)
    if(result.code === 200)  {
      dispatch(changePlaySongUrlAction(result.data[0]))
    }
  }
}