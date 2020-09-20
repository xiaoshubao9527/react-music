import { 
    CHANGE_BANNER, 
    CHANGE_HOT_RECOMMEND, 
    CHANGE_NEW_ALBUM,
    CHANGE_SOARING_LIST,
    CHANGE_NEW_SONG_LIST,
    CHANGE_ORIGINAL_LIST
} from "./constant"
import { 
    getBanners, 
    getHotRecommends, 
    getNewAlbum,
    getTopList
} from "../../../../../service/recommend"

// 轮播
export const changeBannerAction = (banners) => ({type: CHANGE_BANNER, banners})
// 热门推荐
export const changeHotRecommendAction = (hotRecommends) => ({type: CHANGE_HOT_RECOMMEND, hotRecommends})
// 新碟商家
export const changeNewAlbumAction = (newAlbums) => ({type: CHANGE_NEW_ALBUM, newAlbums})
// 飙升榜
export const changeSoaringListAction = (soaringList) => ({type: CHANGE_SOARING_LIST, soaringList})
// 新歌榜
export const changeNewListAction = (newList) => ({type: CHANGE_NEW_SONG_LIST, newList})
// 原创榜
export const changeOriginalListAction = (originalList) => ({type: CHANGE_ORIGINAL_LIST, originalList})

export const getBannersAction = () => {
    return async dispatch => {
        const result = await getBanners()
        if(result.code === 200) {
            dispatch(changeBannerAction(result.banners))
        }
    }
}
export const getHotRecommendAction = () => {
    return async dispatch => {
        const result = await getHotRecommends()
        if(result.code === 200) {
            dispatch(changeHotRecommendAction(result.result))
        }
    }
}
export const getNewAlbumAction = () => {
    return async dispatch => {
        const result = await getNewAlbum()
        if(result.code === 200) {
            dispatch(changeNewAlbumAction(result.albums))
        }
    }
}
export const getTopListAction = (idx) => {
    return async dispatch => {
        const result = await getTopList(idx)
        switch(idx) {
            case 0:
                dispatch(changeNewListAction(result))
                break;
            case 2:
                dispatch(changeOriginalListAction(result))
                break;      
            case 3:
                dispatch(changeSoaringListAction(result))
                break;  
        }
    }
}