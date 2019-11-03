import React from 'react';

const Matrix = props => {
  return (
    <div>
      <svg version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           className="radar__wrapper"
           viewBox="0 0 750 770"
           id="chart">
        <line x1="40" y1="40" x2="40" y2="740" stroke="black"/>
        <line x1="40" y1="740" x2="740" y2="740" stroke="black"/>
        <polyline points="30,55 40,40 50,55" stroke="black" fill="none"/>
        <polyline points="725,730 740,740 725,750" stroke="black" fill="none"/>
        <line x1="40" y1="390" x2="740" y2="390" stroke="grey" strokeDasharray="7" strokeWidth="3"/>
        <line x1="380" y1="740" x2="380" y2="40" stroke="grey" strokeDasharray="7" strokeWidth="3"/>
        <text x="100" y="150" fontSize="12" fill="#006FBA" fontWeight="bold">
          "Венчур"
        </text>
        <text x="100" y="170" fontSize="12" fill="#006FBA" fontWeight="bold">
          Стратегия: пробовать
        </text>
        <text x="550" y="150" fontSize="12" fill="#006FBA" fontWeight="bold">
          "Мейнстрим"
        </text>
        <text x="550" y="170" fontSize="12" fill="#006FBA" fontWeight="bold">
          Стратегия: внедрять
        </text>
        <text x="100" y="600" fontSize="12" fill="#006FBA" fontWeight="bold">
          "Космос"
        </text>
        <text x="100" y="620" fontSize="12" fill="#006FBA" fontWeight="bold">
          Стратегия: наблюдать
        </text>
        <text x="550" y="600" fontSize="12" fill="#006FBA" fontWeight="bold">
          "Уникальные
        </text>
        <text x="550" y="620" fontSize="12" fill="#006FBA" fontWeight="bold">
          компетенции"
        </text>
        <text x="550" y="640" fontSize="12" fill="#006FBA" fontWeight="bold">
          Стратегия: монетизировать
        </text>
        <text x="120" y="765" fontSize="12" fill="#006FBA" fontWeight="bold" letterSpacing="93">
          1234567
        </text>
        <text x="20" y="765" fontSize="12" fill="#006FBA" fontWeight="bold">
          0
        </text>
        <text x="20" y="625" fontSize="12" fill="#006FBA" fontWeight="bold">
          1
        </text>
        <text x="20" y="485" fontSize="12" fill="#006FBA" fontWeight="bold">
          2
        </text>
        <text x="20" y="345" fontSize="12" fill="#006FBA" fontWeight="bold">
          3
        </text>
        <text x="20" y="205" fontSize="12" fill="#006FBA" fontWeight="bold">
          4
        </text>
        <text x="18" y="65" fontSize="12" fill="#006FBA" fontWeight="bold">
          5
        </text>
        {props.children}
      </svg>
    </div>
  )
};

export default Matrix;
