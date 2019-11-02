import React from 'react';

import './Radar.scss';

const Radar = props => {
  return (
    <div className="radar">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="radar__wrapper"
        viewBox="0 0 500 500"
      >
        <circle cx="250" cy="250" r="250" fill="#d5f0fb" />
        <circle cx="250" cy="250" r="200" fill="#ace1f6" />
        <circle cx="250" cy="250" r="130" fill="#82d2f2" />
        <circle cx="250" cy="250" r="10" fill="white" />
        <circle
          cx="250"
          cy="250"
          r="247"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle
          cx="250"
          cy="250"
          r="197"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle
          cx="250"
          cy="250"
          r="127"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="250"
          y1="0"
          x2="250"
          y2="500"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="0"
          y1="250"
          x2="500"
          y2="250"
          stroke="white"
          strokeWidth="2"
        />
        <line x1="0" y1="0" x2="500" y2="500" stroke="white" strokeWidth="2" />
        <line x1="500" y1="0" x2="0" y2="500" stroke="white" strokeWidth="2" />
        {props.children}
      </svg>
    </div>
  );
};

export default Radar;
