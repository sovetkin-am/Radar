import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Radar from '../Radar/Radar';
import Point from '../Point/Point';
import Converter from '../converter/Converter';
import Tooltip from '../Tooltip/Tooltip';
import { useSelector } from 'react-redux';
import MainPage from '../MainPage/MainPage';
import AppMenu from '../AppMenu/AppMenu';

import './App.scss';
import RadarPage from '../RadarPage/RadarPage';

const App = () => {
  return (
    <>
      <div className="app">
        <div className="app__navigation">
          <AppMenu />
        </div>
        <Switch>
          <Route exact path={'/'}>
            <MainPage />
          </Route>
          <Route exact path={'/radar'}>
            <RadarPage />
          </Route>
          <Route exact path={'/upload'}>
            <Converter/>
          </Route>
          <Route>
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </div>
      <Tooltip />
    </>
  );
};

export default App;
