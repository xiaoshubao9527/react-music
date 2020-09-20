import React, { memo, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { getHotRecommendAction } from '../../store/actionCreators';

import RecommendThemeHeader from '@/components/recommend-theme-header'
import SongCover from '@/components/song-cover'
import {HotRecommendWrapper, HotRecommendList} from './style'
export default memo(function HotRecommend() {
    // redux-hooks
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotRecommendAction())
    }, [dispatch])

    const {hotRecommends} = useSelector(state => ({
        hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }))
    return (
        <HotRecommendWrapper>
            <RecommendThemeHeader title="热门推荐" keyword={["华语", "流行", "摇滚", "民谣", "电子"]} />
            <HotRecommendList>
                {
                    hotRecommends.map(item => <SongCover {...item} key={item.id} />)
                }
            </HotRecommendList>
        </HotRecommendWrapper>
    )
})
