import React from 'react';
import Radar from './Radar/Radar';
import Point from './Point/Point';
import Converter from './converter/Converter';

const Root = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
    }}
  >
    <Radar>
      <Point x={100} y={200} radius={10} />
    </Radar>
    <Converter/>
  </div>
);

export default Root;
