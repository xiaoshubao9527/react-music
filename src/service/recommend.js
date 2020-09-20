import request from './request'
import {REQUEST_HOT_RECOMMEND, REQUEST_NEW_ALBUM} from '@/common/constant'
// 轮播
export const getBanners = () => {
    return request({
        url: '/banner'
    })
}
// 热门推荐
export const getHotRecommends = (limit = REQUEST_HOT_RECOMMEND) => {
    return request({
        url: '/personalized',
        params: {
            limit
        }
    })
}
// 新碟上架
export const getNewAlbum = (limit = REQUEST_NEW_ALBUM) => {
    return request({
        url: '/top/album',
        params: {
            limit
        }
    })
}
// 榜单
export const getTopList = (idx) => {
    return request({
        url: '/top/list',
        params: {
            idx
        }
    })
}