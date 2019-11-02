import React from 'react';
import Radar from './Radar/Radar';
import Point from './Point/Point';

const Root = () => (
  <Radar>
    <Point x={100} y={200} radius={10} />
  </Radar>
);

export default Root;
