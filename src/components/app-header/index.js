import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import {AppHeaderRouterList} from '@/common/config'
import {AppHeaderStyled} from './style'
export default memo(function AppHeader() {
  function getRouterList(item, index) {
      if(index < 3) {
        return (
          <NavLink  key={item.title} to={item.path}>
            <span>{item.title}</span>
            <i></i>
          </NavLink>
        )
      } else {
        return (
          <a rel="noopener noreferrer" key={item.title} target="_blank" href={item.path}>
            <span>{item.title}</span>
            <i></i>
          </a>
        )
      }
  }
  return (
    <AppHeaderStyled>
        <div className="header-wrap">
          <div className="header-left">
            <h1 className="logo"><a href="/">网易云音乐</a></h1>
            <div className="list">
              {
                AppHeaderRouterList.map((item, index) => {
                  return getRouterList(item, index)
                })
              }
            </div>
          </div>
          <div className="header-right">
            <div className="search">
              <Input prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" />
            </div>
            <div className="center"><a rel="noopener noreferrer" target="_blank" href="https://music.163.com/#/login?targetUrl=%2Fst/creator">创作者中心</a></div>
            <a className="login-font" href="/discover/recommend">登录</a>
          </div>
        </div>
    </AppHeaderStyled>
  )
})
