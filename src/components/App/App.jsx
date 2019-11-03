import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { push } from 'connected-react-router';
import Converter from '../converter/Converter';
import Tooltip from '../Tooltip/Tooltip';
import AppMenu from '../AppMenu/AppMenu';

import './App.scss';
import { useDispatch } from 'react-redux';
import RadarPage from '../RadarPage/RadarPage';
import MatrixPage from '../MatrixPage/MatrixPage';

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="app">
        <div className="app__navigation">
          <AppMenu />
        </div>
        <Switch>
          <Route exact path={'/'}>
            { dispatch(push('/radar')) }
          </Route>
          <Route exact path={'/radar'}>
            <RadarPage />
          </Route>
          <Route exact path={'/matrix'}>
            <MatrixPage />
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
