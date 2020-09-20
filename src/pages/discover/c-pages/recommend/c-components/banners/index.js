import React, { 
    memo, 
    useEffect, 
    useState, 
    useCallback,
    useRef
} from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import { Carousel } from 'antd';

import {getBannersAction} from '../../store/actionCreators';

import {BannersWrapper, Banner, PicWrapper, BannerBtn} from './style';
function Banners() {
    // state
    const [bannerCurrentIndex, setBannerCurrentIndex] = useState(0)
  
    // redux逻辑
    const dispatch = useDispatch()
    const recommend = useSelector(state => ({
        banners: state.getIn(['recommend', 'banners'])
    }), shallowEqual)
  
    // hooks
    useEffect(() => {
      dispatch(getBannersAction())
    }, [dispatch])
  
    // 其他功能函数
    const bannerBeforeChange = useCallback((from, to) => {
      setBannerCurrentIndex(to)
    }, [])
    const bgImage = (recommend.banners[bannerCurrentIndex]) && (recommend.banners[bannerCurrentIndex].imageUrl)
  
    const CarouselRef = useRef()
      return (
          <BannersWrapper bgImage={bgImage + '?imageView&blur=40x20'}>
              <Banner>
                  <PicWrapper>
                      <Carousel 
                          beforeChange={bannerBeforeChange} 
                          effect="fade" 
                          autoplay
                          ref={CarouselRef}
                      >
                          {
                              recommend.banners.map((item, index) => {
                                  return (
                                      <div className="pic" key={item.imageUrl}>
                                          <img src={item.imageUrl} alt={item.typeTitle}/>
                                      </div>
                                  )
                              })
                          }  
                      </Carousel>
                  </PicWrapper>
                  <a rel="noopener noreferrer" target="_blank" href="https://music.163.com/#/download" className="download">
                      <img src={require("@/assets/img/download.png")} alt="下载客户端" />
                  </a>
                  <BannerBtn>
                      <div className="btn left-btn" onClick={e => CarouselRef.current.prev()}></div>  
                      <div className="btn right-btn" onClick={e => CarouselRef.current.next()}></div>  
                  </BannerBtn>  
              </Banner>
          </BannersWrapper>
      )
}
export default memo(Banners)
