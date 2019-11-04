import React, { useMemo, useState } from 'react';
import Page from '../Page/Page';
import Matrix from '../Matrix/Matrix';
import { useSelector } from 'react-redux';
import Point from '../Point/Point';
import Filter from '../Filter/Filter';

const MatrixPage = () => {
  const data = useSelector(store => store.data.filteredData);

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

  const getChart = () => {
    return (
      <Matrix>
        {data.map(props => (
          <Point
            {...props}
            isHover={props.script === hoverId}
            onHover={hoverCallback}
            number={props.script}
            key={props.script}
            top={props.position.mTop}
            left={props.position.mLeft}
          />
        ))}
      </Matrix>
    );
  };

  return (
    <Page
      chart={getChart()}
      menu={
        <Filter
          title={'Радар применения цифровых технологий'}
          readyState
          marketState
          functionalGroup
          domain
        />
      }
    />
  );
};

export default MatrixPage;
