import React from 'react';

import './Page.scss';

const Page = props => {
  return (
    <div className='page'>
      <div className='page__chart'>
        {props.chart}
      </div>
      <div className="page__menu">
        {props.menu}
      </div>
    </div>
  )
};

export default Page;