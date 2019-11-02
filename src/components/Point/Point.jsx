import React from 'react';

const Point = props => {
  const { x, y, radius } = props;

  return <circle r={radius} cx={x} cy={y} fill="orange" />;
};

export default Point;
