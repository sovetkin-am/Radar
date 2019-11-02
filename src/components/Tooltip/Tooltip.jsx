import React from 'react';
import { useSelector } from 'react-redux';

import './Tooltip.scss';

const Tooltip = () => {
  const state = useSelector(state => state.tooltip);

  return (
    <div
      className="tooltip"
      style={{
      left: state.left,
      top: state.top,
      display: state.isVisible ? 'grid' : 'none'
    }}>
      <div className="tooltip__label">Наименование сценария:</div>
      <div className="tooltip__data">{state.data.script}</div>
      <div className="tooltip__label">Описание:</div>
      <div className="tooltip__data">{state.data.description}</div>
      <div className="tooltip__label">Группа технологий</div>
      <div className="tooltip__data">{state.data.technologyGroup}</div>
      <div className="tooltip__label">Реализуется в Газпром нефти?</div>
      <div className="tooltip__data">{state.data.implementation}</div>
      <div className="tooltip__label">Потенциал решения</div>
      <div className="tooltip__data">{state.data.solutionPotential}</div>
      <div className="tooltip__label">Организационная готовность</div>
      <div className="tooltip__data">{state.data.readyState}</div>
      <div className="tooltip__label">Рыночная зрелость</div>
      <div className="tooltip__data">{state.data.marketState}</div>
    </div>
  );
};

export default Tooltip;