import { 
    CHANGE_BANNER, 
    CHANGE_HOT_RECOMMEND, 
    CHANGE_NEW_ALBUM,
    CHANGE_SOARING_LIST,
    CHANGE_NEW_SONG_LIST,
    CHANGE_ORIGINAL_LIST
 } from "./constant";

import {Map} from 'immutable'
const defaultState = Map({
    banners: [],
    hotRecommends: [],
    newAlbums: [],
    soaringList: {},
    newList: {},
    originalList: {}
})
export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case CHANGE_BANNER:
            return state.set('banners', action.banners)
        case CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommends', action.hotRecommends)
        case CHANGE_NEW_ALBUM:
            return state.set('newAlbums', action.newAlbums)
        case CHANGE_SOARING_LIST:
            return state.set('soaringList', action.soaringList)
        case CHANGE_NEW_SONG_LIST:
            return state.set('newList', action.newList) 
        case CHANGE_ORIGINAL_LIST:
            return state.set('originalList', action.originalList)            
        default: 
            return state  
    }
}