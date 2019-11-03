import React from 'react';
import Radar from '../Radar/Radar';
import Point from '../Point/Point';
import { useDispatch, useSelector } from 'react-redux';
import Page from '../Page/Page';
import { Slider, Checkbox, RadioGroup, Radio } from '@material-ui/core';

import './RadarPage.scss';
import { dataFilterSet } from '../../redux/actions/data';

const RadarPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(store => store.data);
  const filter = useSelector(store => store.data.filter);

  const getChart = () => (
    <Radar>
      {data.filteredData.map(props => <Point {...props} key={props.script}/>)}
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

  const getMenu = () => {
    return (
      <>
        <h3 className="title title_h3">Радар применения цифровых технологий</h3>
        <div className="data__section">
          <div className="data__label">Организационная готовность (1-7):</div>
          <div className="data__range">
            <Slider
              defaultValue={filter.readyState}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={7}
              onChangeCommitted={setReadyState}
              style={{ color: '#006FBA' }}
            />
          </div>
        </div>
        <div className="data__section">
          <div className="data__label">Рыночная зрелость (1-5):</div>
          <div className="data__range">
            <Slider
              defaultValue={filter.marketState}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
              onChangeCommitted={setMarketState}
              style={{ color: '#006FBA' }}
            />
          </div>
        </div>
        <div className="data__section">
          <div className="data__label">Реализуется в ГПН:</div>
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
          <div className="data__label">Функциональная группа:</div>
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
                value={'бршп'}
                style={{ color: '#0670B8' }}
                color="primary"
                id="radio-brsp"
              />
              БРШП
            </label>
            <label className="data__checkbox-label" htmlFor="radio-drilling">
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
            <label className="data__checkbox-label" htmlFor="radio-production">
              <Radio
                value={'добыча'}
                style={{ color: '#0670B8' }}
                color="primary"
                id="radio-production"
              />
              Добыча
            </label>
            <label className="data__checkbox-label" htmlFor="radio-purchase">
              <Radio
                value={'закупки и снабжение'}
                style={{ color: '#0670B8' }}
                color="primary"
                id="radio-purchase"
              />
              Закупки и снабжение
            </label>
            <label className="data__checkbox-label" htmlFor="radio-building">
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
            <label className="data__checkbox-label" htmlFor="radio-corporate">
              <Radio
                value={'корпоративные функции'}
                style={{ color: '#0670B8' }}
                color="primary"
                id="radio-corporate"
              />
              Корпоративные функции
            </label>
            <label className="data__checkbox-label" htmlFor="radio-logistics">
              <Radio
                value={'логистика'}
                style={{ color: '#0670B8' }}
                color="primary"
                id="radio-logistics"
              />
              Логистика
            </label>
            <label className="data__checkbox-label" htmlFor="radio-processing">
              <Radio
                value={'переработка'}
                style={{ color: '#0670B8' }}
                color="primary"
                id="radio-processing"
              />
              Переработка
            </label>
            <label className="data__checkbox-label" htmlFor="radio-security">
              <Radio
                value={'промышленная безопасность'}
                style={{ color: '#0670B8' }}
                color="primary"
                id="radio-security"
              />
              Промышленная безопасность
            </label>
            <label className="data__checkbox-label" htmlFor="radio-scouting">
              <Radio
                value={'разведка'}
                style={{ color: '#0670B8' }}
                color="primary"
                id="radio-scouting"
              />
              Разведка
            </label>
          </RadioGroup>
        </div>
      </>
    );
  };

  return <Page chart={getChart()} menu={getMenu()} />;
};

export default RadarPage;
