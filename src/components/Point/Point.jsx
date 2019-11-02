import React from 'react';
import { useDispatch } from 'react-redux';
import { setTooltipState } from '../../redux/actions/tooltip';

const Point = props => {
  const { x, y, radius } = props;

  const dispatch = useDispatch();

  const showTooltip = e => {
    let left = e.pageX + 15;
    let top = e.pageY + 15;
    window.requestAnimationFrame(() => {
      dispatch(setTooltipState({ left, top, isVisible: true }));
    });
  };

  const hideTooltip = () => {
    window.requestAnimationFrame(() => dispatch(setTooltipState({ isVisible: false })));
  };

  return (
    <circle
      r={radius}
      cx={x}
      cy={y}
      fill="orange"
      onMouseMove={showTooltip}
      onMouseLeave={hideTooltip}
    />
  );
};

export default Point;
