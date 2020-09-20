import {Map} from 'immutable'
import {CHANGE_PLAY_SONG_DETAIL_INFO, CHANGE_PLAY_SONG_URL} from './constant'
const defaultState = Map({
  playSongDetailInfo: {},
  playSongUrl: {}
})
export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case CHANGE_PLAY_SONG_DETAIL_INFO:
      return state.set('playSongDetailInfo', action.playSongDetailInfo)
    case CHANGE_PLAY_SONG_URL:
      return state.set('playSongUrl', action.playSongUrl)   
    default:
      return state;
  }
}