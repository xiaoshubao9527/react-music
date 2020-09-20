import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'
import DiscoverHeader from '@/components/discover-header'
import {Redirect} from 'react-router-dom'
export default memo(function Discover(props) {
  return (
    <div>
      <DiscoverHeader />
      {
        renderRoutes(props.route.routes)
      }
      {
        <Redirect to={"/discover/recommend"} />
      }
    </div>
  )
})
