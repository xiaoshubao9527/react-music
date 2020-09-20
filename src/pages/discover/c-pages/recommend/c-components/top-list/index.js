import React, { memo, useEffect } from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import {TopListWrapper, Content} from './style'
import {getTopListAction} from '../../store/actionCreators'

import RecommendThemeHeader from '@/components/recommend-theme-header'
export default memo(function TopList() {
  //redux-hooks 
  const dispatch = useDispatch();
  const {soaringList, newList, originalList} = useSelector(state => ({
    soaringList: state.getIn(['recommend', 'soaringList']),
    newList: state.getIn(['recommend', 'newList']),
    originalList: state.getIn(['recommend', 'originalList'])
  }))
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])
  return (
    <TopListWrapper>
      <RecommendThemeHeader title={'榜单'} />
      <Content>
        <ul>
          <li>
            <div className="top">
              <div className="pic"><img src={soaringList.playlist && soaringList.playlist.coverImgUrl} /></div>
              <div className="des">
                <h3 className="title"><a href="/todo">云音乐飙升榜</a></h3>
                <a href="/todo" className="play">播放</a>
                <a href="/todo" className="add">添加</a>
              </div>
            </div>
            <div className="list">
              {
                  soaringList.playlist && soaringList.playlist.tracks.slice(0, 10).map((item, index) => {
                    return (
                        <div className="list-item" key={item.id} style={{backgroundColor: ((index +  1) % 2) && '#E8E8E8'}}>
                          <span style={{color: index < 3 && '#c10d0c' }}>{index + 1}</span>
                          <a className="text-overflow" href="/todo">{item.name}</a>
                          {/* <div className="open">
                            <a href="/todo">播放</a>
                            <a href="/todo">添加</a>
                            <a href="/todo">收藏</a>
                          </div> */}
                        </div>
                    )
                  })
                }
                <div className="find-more"><a href="/todo">查看全部 &gt;</a></div>
            </div>
          </li>
          <li>
            <div className="top">
              <div className="pic"><img src="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100" /></div>
              <div className="des">
                <h3 className="title"><a href="/todo">云音乐新歌榜</a></h3>
                <a href="/todo" className="play">播放</a>
                <a href="/todo" className="add">添加</a>
              </div>
            </div>
            <div className="list">
              {
                  newList.playlist && newList.playlist.tracks.slice(0, 10).map((item, index) => {
                    return (
                        <div className="list-item" key={item.id} style={{backgroundColor: ((index +  1) % 2) && '#E8E8E8'}}>
                          <span style={{color: index < 3 && '#c10d0c' }}>{index + 1}</span>
                          <a className="text-overflow" href="/todo">{item.name}</a>
                          {/* <div className="open">
                            <a href="/todo">播放</a>
                            <a href="/todo">添加</a>
                            <a href="/todo">收藏</a>
                          </div> */}
                        </div>
                    )
                  })
              }
              <div className="find-more"><a href="/todo">查看全部 &gt;</a></div>
            </div>
          </li>
          <li>
            <div className="top">
              <div className="pic"><img src={originalList.playlist && originalList.playlist.coverImgUrl} /></div>
              <div className="des">
                <h3 className="title"><a href="/todo">网易原创歌曲榜</a></h3>
                <a href="/todo" className="play">播放</a>
                <a href="/todo" className="add">添加</a>
              </div>
            </div>
            <div className="list">
              {
                originalList.playlist && originalList.playlist.tracks.slice(0, 10).map((item, index) => {
                  return (
                      <div className="list-item" key={item.id} style={{backgroundColor: ((index +  1) % 2) && '#E8E8E8'}}>
                        <span style={{color: index < 3 && '#c10d0c' }}>{index + 1}</span>
                        <a className="text-overflow" href="/todo">{item.name}</a>
                        {/* <div className="open">
                          <a href="/todo">播放</a>
                          <a href="/todo">添加</a>
                          <a href="/todo">收藏</a>
                        </div> */}
                      </div>
                  )
                })
              }
              <div className="find-more"><a href="/todo">查看全部 &gt;</a></div>
            </div>
          </li>
        </ul>
      </Content>
    </TopListWrapper>
  )
})
