import { Carousel } from 'antd';
import React, { memo, useEffect, useRef } from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators';
import {formateDimensionalArray} from '@/utils/formate-data'
import { REQUEAT_NEW_ALBUM_COLUMN_NUMBER, REQUEAT_NEW_ALBUM_COLUMN } from '../../../../../../common/constant';
import {
    NewAlbumWrapper, 
    Content, 
    Banner,
    BannerBtn
} from './style';

import RecommendThemeHeader from '@/components/recommend-theme-header';
import AlbumCover from '@/components/album-cover'

export default memo(function NewAlbum() {
// redux-hooks
const dispatch = useDispatch();
useEffect(() => {
    dispatch(getNewAlbumAction())
}, [dispatch])
const {newAlbums} = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
}), shallowEqual)

// other hooks
const carouselRef = useRef(); 
    return (
        <NewAlbumWrapper>
            <RecommendThemeHeader title="新碟上架" />
            <Content>
                    <Banner>
                        <Carousel ref={carouselRef}>
                            {
                                formateDimensionalArray(newAlbums, REQUEAT_NEW_ALBUM_COLUMN, REQUEAT_NEW_ALBUM_COLUMN_NUMBER).map((item, index) => {
                                    return (
                                        <div key={index} className="carousel-box">
                                            {
                                                item.map(cItem => {
                                                    return (
                                                        <AlbumCover
                                                            albumName={cItem.artists[0].name}
                                                            name={cItem.name}
                                                            key={cItem.id}
                                                            picUrl={cItem.picUrl}
                                                            width="100px"
                                                            size="118px"
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </Carousel> 
                    </Banner>
                    <BannerBtn>
                        <div className="btn left-btn" onClick={e => carouselRef.current.prev()}></div>
                        <div className="btn right-btn" onClick={e => carouselRef.current.next()}></div>
                    </BannerBtn>
            </Content>
        </NewAlbumWrapper>
    )
})
