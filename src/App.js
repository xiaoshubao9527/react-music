import React from 'react';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux'

import './assets/css/reset.css';
import routes from './router';
import store from './store'

import AppHeader from '@/components/app-header';
import Player from '@/pages/song-detail/player'
import AppFooter from '@/components/app-footer';
class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
          <AppHeader />
          {
            renderRoutes(routes)
          }
          <Player />
          <AppFooter />
      </Provider>
    );
  }
}

export default App;
