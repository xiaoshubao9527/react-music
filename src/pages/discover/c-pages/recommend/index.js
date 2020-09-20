import React, { memo } from 'react';
import {
  RecommendWrapper, 
  Content,
  ContetLeft,
  ContetRight
} from './style'
import Banners from './c-components/banners';
import HotRecommend from './c-components/hot-recommend';
import NewAlbum from './c-components/new-album';
import TopList from './c-components/top-list';
function Recommend() {

  return (
    <RecommendWrapper>
      {/*轮播*/}
      <Banners />
      <Content>
        {/*内容左边*/}
        <ContetLeft>
            <div className="content-left-wrapper">
              <HotRecommend />
              <NewAlbum />
              <TopList />
            </div>
        </ContetLeft>
        {/*内容右边*/}
        <ContetRight>
        </ContetRight>
      </Content>
    </RecommendWrapper>
  )
}
export default memo(Recommend)