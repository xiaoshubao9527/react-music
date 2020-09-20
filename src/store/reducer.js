
import {combineReducers} from 'redux-immutable'
import {reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'
import {reducer as songDetailReducer} from '@/pages/song-detail/store'
export default combineReducers({
    recommend: recommendReducer,
    songDetail: songDetailReducer
})