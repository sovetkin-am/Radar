import React from 'react';

import './Radar.scss';

const Radar = props => {
  return (
    <div className="radar">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="radar__wrapper"
        viewBox="0 0 700 700"
      >
        <circle cx="350" cy="350" r="250" fill="#d5f0fb" />
        <circle cx="350" cy="350" r="200" fill="#ace1f6" />
        <circle cx="350" cy="350" r="130" fill="#82d2f2" />
        <circle cx="350" cy="350" r="10" fill="white" />
        <circle
          cx="350"
          cy="350"
          r="247"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle
          cx="350"
          cy="350"
          r="197"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle
          cx="350"
          cy="350"
          r="127"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="350"
          y1="0"
          x2="350"
          y2="700"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="0"
          y1="350"
          x2="700"
          y2="350"
          stroke="white"
          strokeWidth="2"
        />
        <line x1="0" y1="0" x2="700" y2="700" stroke="white" strokeWidth="2" />
        <line x1="700" y1="0" x2="0" y2="700" stroke="white" strokeWidth="2" />
        <text x="0" y="250" fontSize="12" fill="#006FBA" fontWeight="bold">
          Роботы,
        </text>
        <text x="0" y="265" fontSize="12" fill="#006FBA" fontWeight="bold">
          автономная техника
        </text>
        <text x="0" y="280" fontSize="12" fill="#006FBA" fontWeight="bold">
          и аддитивные
        </text>
        <text x="0" y="295" fontSize="12" fill="#006FBA" fontWeight="bold">
          технологии
        </text>
        <text x="0" y="440" fontSize="12" fill="#006FBA" fontWeight="bold">
        Промышленный
        </text>
        <text x="0" y="455" fontSize="12" fill="#006FBA" fontWeight="bold">
          интернет
        </text>
        <text x="0" y="470" fontSize="12" fill="#006FBA" fontWeight="bold">
          и цифровые двойники
        </text>
        <text x="200" y="600" fontSize="12" fill="#006FBA" fontWeight="bold">
          Блокчейн
        </text>
        <text x="430" y="600" fontSize="12" fill="#006FBA" fontWeight="bold">
          Средства коллаборации
        </text>
        <text x="590" y="450" fontSize="12" fill="#006FBA" fontWeight="bold">
          Средства
        </text>
        <text x="590" y="465" fontSize="12" fill="#006FBA" fontWeight="bold">
          оптимизации
        </text>
        <text x="590" y="480" fontSize="12" fill="#006FBA" fontWeight="bold">
          процессов
        </text>
        <text x="595" y="245" fontSize="12" fill="#006FBA" fontWeight="bold">
          Искусственный
        </text>
        <text x="595" y="260" fontSize="12" fill="#006FBA" fontWeight="bold">
          интеллект и
        </text>
        <text x="595" y="275" fontSize="12" fill="#006FBA" fontWeight="bold">
          аналитика
        </text>
        <text x="430" y="75" fontSize="12" fill="#006FBA" fontWeight="bold">
          AR/VR и
        </text>
        <text x="430" y="90" fontSize="12" fill="#006FBA" fontWeight="bold">
          естественные
        </text>
        <text x="430" y="105" fontSize="12" fill="#006FBA" fontWeight="bold">
          интерфейсы
        </text>
        <text x="230" y="100" fontSize="12" fill="#006FBA" fontWeight="bold">
          БВС
        </text>
        {props.children}
      </svg>
    </div>
  );
};

export default Radar;
