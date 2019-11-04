import React, { useMemo, useState } from 'react';
import Radar from '../Radar/Radar';
import Point from '../Point/Point';
import { useDispatch, useSelector } from 'react-redux';
import Page from '../Page/Page';
import {
  Slider,
  Checkbox,
  RadioGroup,
  Radio,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';

import './RadarPage.scss';
import { dataFilterSet } from '../../redux/actions/data';

const RadarPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(store => store.data);
  const filter = useSelector(store => store.data.filter);

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

  const setReadyState = (event, value) =>
    dispatch(dataFilterSet({ readyState: value }));
  const setMarketState = (event, value) =>
    dispatch(dataFilterSet({ marketState: value }));
  const setGPNImplementation = event =>
    dispatch(
      dataFilterSet({
        implementation: {
          gpn: event.target.checked,
          outsourcing: filter.implementation.outsourcing,
        },
      })
    );
  const setOutsorcingImplementation = event =>
    dispatch(
      dataFilterSet({
        implementation: {
          gpn: filter.implementation.gpn,
          outsourcing: event.target.checked,
        },
      })
    );
  const setFunctionalGroup = (event, value) =>
    dispatch(dataFilterSet({ functionalGroup: value }));

  // TODO: вынеси в отдельный компонент + memo
  const getMenu = () => {
    return (
      <>
        <h3 className="title title_h3">Радар применения цифровых технологий</h3>
        <div className="data__section">
          <div className="data__label">Организационная готовность (1-7):</div>
          <div className="data__range">
            <Slider
              defaultValue={filter.readyState}
              value={filter.readyState}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={7}
              onChange={setReadyState}
              style={{ color: '#006FBA' }}
            />
          </div>
        </div>
        <div className="data__section">
          <div className="data__label">Рыночная зрелость (1-5):</div>
          <div className="data__range">
            <Slider
              defaultValue={filter.marketState}
              value={filter.marketState}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
              onChange={setMarketState}
              style={{ color: '#006FBA' }}
            />
          </div>
        </div>
        <div className="data__section">
          <div className="data__label">«Газпром нефть»</div>
          <label className="data__checkbox-label">
            <Checkbox
              style={{ color: '#0670B8' }}
              onChange={setGPNImplementation}
              checked={filter.implementation.gpn}
            />
            Да
          </label>
          <label className="data__checkbox-label">
            <Checkbox
              style={{ color: '#FF952E' }}
              onChange={setOutsorcingImplementation}
              checked={filter.implementation.outsourcing}
            />
            Нет
          </label>
        </div>
        <div className="data__section">
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="data__label">Функциональная группа:</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                onChange={setFunctionalGroup}
                value={filter.functionalGroup}
              >
                <label className="data__checkbox-label" htmlFor="radio-all">
                  <Radio
                    value={'all'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-all"
                  />
                  Показать все
                </label>
                <label className="data__checkbox-label" htmlFor="radio-brsp">
                  <Radio
                    value={'добыча на шельфе'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-brsp"
                  />
                  Добыча на шельфе
                </label>
                <label
                  className="data__checkbox-label"
                  htmlFor="radio-drilling"
                >
                  <Radio
                    value={'бурение'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-drilling"
                  />
                  Бурение
                </label>
                <label className="data__checkbox-label" htmlFor="radio-gas">
                  <Radio
                    value={'газ'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-gas"
                  />
                  Газ
                </label>
                <label
                  className="data__checkbox-label"
                  htmlFor="radio-production"
                >
                  <Radio
                    value={'добыча'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-production"
                  />
                  Добыча
                </label>
                <label
                  className="data__checkbox-label"
                  htmlFor="radio-purchase"
                >
                  <Radio
                    value={'закупки и снабжение'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-purchase"
                  />
                  Закупки и снабжение
                </label>
                <label
                  className="data__checkbox-label"
                  htmlFor="radio-building"
                >
                  <Radio
                    value={'капстрой'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-building"
                  />
                  Капстрой
                </label>
                <label className="data__checkbox-label" htmlFor="radio-cd">
                  <Radio
                    value={'кд'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-cd"
                  />
                  КД
                </label>
                <label
                  className="data__checkbox-label"
                  htmlFor="radio-corporate"
                >
                  <Radio
                    value={'корпоративные функции'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-corporate"
                  />
                  Корпоративные функции
                </label>
                <label
                  className="data__checkbox-label"
                  htmlFor="radio-logistics"
                >
                  <Radio
                    value={'логистика'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-logistics"
                  />
                  Логистика
                </label>
                <label
                  className="data__checkbox-label"
                  htmlFor="radio-processing"
                >
                  <Radio
                    value={'переработка'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-processing"
                  />
                  Переработка
                </label>
                <label
                  className="data__checkbox-label"
                  htmlFor="radio-security"
                >
                  <Radio
                    value={'промышленная безопасность'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-security"
                  />
                  Промышленная безопасность
                </label>
                <label
                  className="data__checkbox-label"
                  htmlFor="radio-scouting"
                >
                  <Radio
                    value={'разведка'}
                    style={{ color: '#0670B8' }}
                    color="primary"
                    id="radio-scouting"
                  />
                  Разведка
                </label>
              </RadioGroup>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </>
    );
  };

  return <Page chart={getChart()} menu={getMenu()} />;
};

export default RadarPage;
