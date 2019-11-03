import React from 'react';
import Radar from '../Radar/Radar';
import Point from '../Point/Point';
import { useSelector } from 'react-redux';
import Page from '../Page/Page';
import { Slider, Checkbox, RadioGroup, Radio } from '@material-ui/core';

import './RadarPage.scss';

const RadarPage = () => {
  const data = useSelector(state => state.data);

  const getChart = () => (
    <Radar>
      {data.map(data => (
        <Point {...data} key={data.script} />
      ))}
    </Radar>
  );

  const getMenu = () => {
    return (
      <>
        <h3 className="title title_h3">Радар применения цифровых технологий</h3>
        <div className="data__section">
          <div className="data__label">
            Организационная готовность (1-7):
          </div>
          <div className="data__range">
            <Slider
              defaultValue={[0, 3]}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={7}
              style={{ color: '#006FBA' }}
            />
          </div>
        </div>
        <div className="data__section">
          <div className="data__label">
            Рыночная зрелость (1-5):
          </div>
          <div className="data__range">
            <Slider
              defaultValue={[0, 3]}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
              style={{ color: '#006FBA' }}
            />
          </div>
        </div>
        <div className="data__section">
          <div className="data__label">
            Реализуется в ГПН:
          </div>
          <label className="data__checkbox-label">
            <Checkbox style={{color: '#0670B8'}}/>
            Да
          </label>
          <label className="data__checkbox-label">
            <Checkbox style={{color: '#FF952E'}}/>
            Нет
          </label>
        </div>
        <div className="data__section">
          <div className="data__label">
            Функциональная группа:
          </div>
          <RadioGroup aria-label="gender" name="gender1">
            <label className="data__checkbox-label" htmlFor='radio-all'>
              <Radio value={'all'} style={{color: '#0670B8'}} color="primary" id='radio-all'/>
              Показать все
            </label>
            <label className="data__checkbox-label" htmlFor='radio-brsp'>
              <Radio value={'brsp'} style={{color: '#0670B8'}} color="primary" id='radio-brsp'/>
              БРШП
            </label>
            <label className="data__checkbox-label" htmlFor='radio-drilling'>
              <Radio value={'drilling'} style={{color: '#0670B8'}} color="primary" id='radio-drilling'/>
              Бурение
            </label>
            <label className="data__checkbox-label" htmlFor='radio-gas'>
              <Radio value={'gas'} style={{color: '#0670B8'}} color="primary" id='radio-gas'/>
              Газ
            </label>
            <label className="data__checkbox-label" htmlFor='radio-production'>
              <Radio value={'production'} style={{color: '#0670B8'}} color="primary" id='radio-production'/>
              Добыча
            </label>
            <label className="data__checkbox-label" htmlFor='radio-purchase'>
              <Radio value={'purchase'} style={{color: '#0670B8'}} color="primary" id='radio-purchase'/>
              Закупки и снабжение
            </label>
            <label className="data__checkbox-label" htmlFor='radio-building'>
              <Radio value={'building'} style={{color: '#0670B8'}} color="primary" id='radio-building'/>
              Капстрой
            </label>
            <label className="data__checkbox-label" htmlFor='radio-cd'>
              <Radio value={'cd'} style={{color: '#0670B8'}} color="primary" id='radio-cd'/>
              КД
            </label>
            <label className="data__checkbox-label" htmlFor='radio-corporate'>
              <Radio value={'corporate'} style={{color: '#0670B8'}} color="primary" id='radio-corporate'/>
              Корпоративные функции
            </label>
            <label className="data__checkbox-label" htmlFor='radio-logistics'>
              <Radio value={'logistics'} style={{color: '#0670B8'}} color="primary" id='radio-logistics'/>
              Логистика
            </label>
            <label className="data__checkbox-label" htmlFor='radio-processing'>
              <Radio value={'processing'} style={{color: '#0670B8'}} color="primary" id='radio-processing'/>
              Переработка
            </label>
            <label className="data__checkbox-label" htmlFor='radio-security'>
              <Radio value={'security'} style={{color: '#0670B8'}} color="primary" id='radio-security'/>
              Промышленная безопасность
            </label>
            <label className="data__checkbox-label" htmlFor='radio-scouting'>
              <Radio value={'scouting'} style={{color: '#0670B8'}} color="primary" id='radio-scouting'/>
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
