import React, { memo, Fragment } from 'react'
import {AppFooterStyled} from './style'
import {AppFooterLink, AppFooterEnterList} from '@/common/config.js'
export default memo(function AppFooter() {
  return (
    <AppFooterStyled>
        <div className="content">
            <div className="content-left">
                <div className="link">
                  {
                    AppFooterLink.map(item => {
                      return (
                        <Fragment key={item.title}>
                          <a rel="noopener noreferrer" target="_blank" href={item.path}>{item.title}</a>
                          <span className="line">|</span>
                        </Fragment>
                      )
                    })
                  }
                </div>
                <p className="copy-right">
                  <span>网易公司版权所有©1997-2020</span>
                  杭州乐读科技有限公司运营：
                  <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">浙网文[2018]3506-263号</a>
                </p> 
                <p className="copy-right">
                  <span>违法和不良信息举报电话：0571-89853516</span> 
                  举报邮箱：
                  <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">ncm5990@163.com</a>
                </p> 
                <p className="copy-right">
                  <span>粤B2-20090191-18</span>
                  <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">工业和信息化部备案管理系统网站</a>
                  <a className="police" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">
                    <img width="14px" src={require('@/assets/img/police.png')} alt="police" /> 
                    浙公网安备 33010902002564号
                  </a>
                </p> 
            </div>
            <div className="content-right">
                <ul>
                    {
                      AppFooterEnterList.map(item => {
                        return (
                            <li key={item.link}>
                              <a href={item.link} className={item.class}>link</a>
                              <p>{item.title}</p>
                            </li>
                        )
                      })
                    }
                </ul>
            </div>
        </div>
    </AppFooterStyled>
  )
})
