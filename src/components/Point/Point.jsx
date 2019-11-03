import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { setTooltipState } from '../../redux/actions/tooltip';

const TOOLTIP_MARGIN_TOP = 15;
const TOOLTIP_MARGIN_LEFT = 15;

const Point = props => {
  const dispatch = useDispatch();
  const [isHover, setHover] = useState(false);
  const {radius, fill, left, top} = props;

  const showTooltip = e => {
    const position = {
      top: e.pageY + TOOLTIP_MARGIN_TOP,
      left: e.pageX + TOOLTIP_MARGIN_LEFT,
    };

    window.requestAnimationFrame(() => {
      dispatch(setTooltipState({ position, isVisible: true, data: props }));
    });
  };

  const hideTooltip = () => {
    setHover(false);

    window.requestAnimationFrame(() => {
      dispatch(setTooltipState({ isVisible: false }));
    });
  };

  if (isHover) {
    // TODO: прокинуть рефом
    return ReactDOM.createPortal(
      <circle
        r={radius}
        cx={left}
        cy={top}
        fill={fill}
        onMouseMove={showTooltip}
        onTouchStart={showTooltip}
        onMouseLeave={hideTooltip}
        onTouchEnd={hideTooltip}
        stroke="white"
      />,
      document.getElementById('chart')
    )
  }

  return (
    <circle
      r={radius}
      cx={left}
      cy={top}
      fill={fill}
      onMouseEnter={() => setHover(true)}
      onTouchStart={() => setHover(true)}
    />
  );
};

export default React.memo(Point);
