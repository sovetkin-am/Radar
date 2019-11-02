import React from 'react';
import { Route, Switch } from 'react-router';
import Radar from '../Radar/Radar';
import Point from '../Point/Point';
import Converter from '../converter/Converter';
import Tooltip from '../Tooltip/Tooltip';
import { useSelector } from 'react-redux';

const App = () => {
  const data = useSelector(state => state.data);

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
            {
              data.map(data => <Point {...data} key={data.script} />)
            }
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
