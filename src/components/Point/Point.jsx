import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { setTooltipState } from '../../redux/actions/tooltip';

const TOOLTIP_MARGIN_TOP = 15;
const TOOLTIP_MARGIN_LEFT = 15;

const Point = props => {
  const dispatch = useDispatch();
  const [isHover, setHover] = useState(false);
  const {radius, position, fill} = props;

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
        cx={position.left}
        cy={position.top}
        fill={fill}
        onMouseMove={showTooltip}
        onMouseLeave={hideTooltip}
        stroke="white"
      />,
      document.getElementById('radar')
    )
  }

  return (
    <circle
      r={radius}
      cx={position.left}
      cy={position.top}
      fill={fill}
      onMouseEnter={() => setHover(true)}
    />
  );
};

export default React.memo(Point);
