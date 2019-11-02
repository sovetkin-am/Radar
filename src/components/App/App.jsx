import React from 'react';
import { Route, Switch } from 'react-router';
import Radar from '../Radar/Radar';
import Point from '../Point/Point';
import Converter from '../converter/Converter';
import Tooltip from '../Tooltip/Tooltip';

const App = () => {
  return (
    <Switch>
      <Route exact path={'/'}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <Radar>
            <Point x={100} y={200} radius={10} />
          </Radar>
          <Converter />
          <Tooltip />
        </div>
      </Route>
      <Route>
        <h1>Page not found</h1>
      </Route>
    </Switch>
  );
};

export default App;
