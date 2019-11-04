import React, { useMemo, useState } from 'react';
import Radar from '../Radar/Radar';
import Point from '../Point/Point';
import { useSelector } from 'react-redux';
import Page from '../Page/Page';

import './RadarPage.scss';
import Filter from '../Filter/Filter';

const RadarPage = () => {
  const data = useSelector(store => store.data);

  // TODO: вставить сброс ховера по выходу с графика
  const [hoverId, setHoverId] = useState('');

  const hoverCallback = useMemo(() => {
    // TODO: вставить debounce
    return event => {
      if (event && event.stopPropagation) {
        event.stopPropagation();
        event.preventDefault();
      }

      setHoverId(
        event && event.currentTarget
          ? event.currentTarget.getAttribute('number')
          : ''
      );

      return false;
    };
  }, []);

  const getChart = () => (
    <Radar>
      {data.filteredData.map(props => (
        <Point
          {...props}
          isHover={props.script === hoverId}
          onHover={hoverCallback}
          key={props.script}
          number={props.script}
          left={props.position.rLeft}
          top={props.position.rTop}
        />
      ))}
    </Radar>
  );

  return (
    <Page
      chart={getChart()}
      menu={
        <Filter
          title={'Радар применения цифровых технологий'}
          readyState
          marketState
          implementation
          functionalGroup
          domain
        />
      }
    />
  );
};

export default RadarPage;
