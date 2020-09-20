import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import {DiscoverHeaderStyled} from './style'
import { DiscoverRouterList } from '@/common/config';

export default memo(function DiscoverHeader() {
  return (
    <DiscoverHeaderStyled>
        <div className="discover-header-wrap">
          {
            DiscoverRouterList.map(item => <NavLink key={item.title} exact to={item.path}><span>{item.title}</span></NavLink>)
          }
        </div>
    </DiscoverHeaderStyled>
  )
})
