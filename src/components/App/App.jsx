import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Tooltip from '../Tooltip/Tooltip';
import AppMenu from '../AppMenu/AppMenu';

import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import RadarPage from '../RadarPage/RadarPage';
import MatrixPage from '../MatrixPage/MatrixPage';
import { dataFilterReset } from '../../redux/actions/data';

const App = () => {
  const dispatch = useDispatch();
  const location = useSelector(store => store.router.location.pathname);

  useEffect(() => {
    dispatch(dataFilterReset());
  }, [location]);

  return (
    <>
      <div className="app">
        <div className="app__navigation">
          <AppMenu />
        </div>
        <Switch>
          <Route exact path={'/'}>
            <Redirect to={'/radar'}/>
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
