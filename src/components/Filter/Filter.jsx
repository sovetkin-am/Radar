import React from 'react';
import { dataFilterSet } from '../../redux/actions/data';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Radio,
  RadioGroup,
  Slider,
  Checkbox,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const Filter = props => {
  const dispatch = useDispatch();
  const filter = useSelector(store => store.data.filter);

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
  const setDomain = (event, value) =>
    dispatch(dataFilterSet({ domain: value }));

  return (
    <>
      <h3 className="title title_h3">{props.title}</h3>
      {props.readyState && (
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
      )}
      {props.marketState && (
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
      )}
      {props.implementation && (
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
      )}
      <div className="data__section">
        {props.functionalGroup && (
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
              <div className="data__label data__label_flex-column">
                <span className="data__sub-label">Функциональная группа:</span>
                <span className="data__sub-label-content">
                  {filter.functionalGroup === 'all'
                    ? 'показать все'
                    : filter.functionalGroup}
                </span>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="data__section">
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  onChange={setFunctionalGroup}
                  value={filter.functionalGroup}
                >
                  <label className="data__radio-label" htmlFor="radio-all">
                    <Radio
                      value={'all'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="radio-all"
                    />
                    Показать все
                  </label>
                  <label className="data__radio-label" htmlFor="radio-brsp">
                    <Radio
                      value={'добыча на шельфе'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="radio-brsp"
                    />
                    Добыча на шельфе
                  </label>
                  <label className="data__radio-label" htmlFor="radio-drilling">
                    <Radio
                      value={'бурение'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="radio-drilling"
                    />
                    Бурение
                  </label>
                  <label className="data__radio-label" htmlFor="radio-gas">
                    <Radio
                      value={'газ'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="radio-gas"
                    />
                    Газ
                  </label>
                  <label
                    className="data__radio-label"
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
                  <label className="data__radio-label" htmlFor="radio-purchase">
                    <Radio
                      value={'закупки и снабжение'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="radio-purchase"
                    />
                    Закупки и снабжение
                  </label>
                  <label className="data__radio-label" htmlFor="radio-building">
                    <Radio
                      value={'капстрой'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="radio-building"
                    />
                    Капстрой
                  </label>
                  <label className="data__radio-label" htmlFor="radio-cd">
                    <Radio
                      value={'кд'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="radio-cd"
                    />
                    КД
                  </label>
                  <label
                    className="data__radio-label"
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
                    className="data__radio-label"
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
                    className="data__radio-label"
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
                  <label className="data__radio-label" htmlFor="radio-security">
                    <Radio
                      value={'промышленная безопасность'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="radio-security"
                    />
                    Промышленная безопасность
                  </label>
                  <label className="data__radio-label" htmlFor="radio-scouting">
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
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )}
        {props.domain && (
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
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div className="data__label data__label_flex-column">
                <span className="data__sub-label">Домен:</span>
                <span className="data__sub-label-content">
                  {filter.domain === 'all' ? 'показать все' : filter.domain}
                </span>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="data__section">
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  onChange={setDomain}
                  value={filter.domain}
                >
                  <label className="data__radio-label" htmlFor="domain-all">
                    <Radio
                      value={'all'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="domain-all"
                    />
                    Показать все
                  </label>
                  <label className="data__radio-label" htmlFor="domain-arvr">
                    <Radio
                      value={'ar/vr и естественные интерфейсы'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="domain-arvr"
                    />
                    AR/VR и естественные интерфейсы
                  </label>
                  <label className="data__radio-label" htmlFor="domain-bvc">
                    <Radio
                      value={'бвс'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="domain-bvc"
                    />
                    БВС
                  </label>
                  <label
                    className="data__radio-label"
                    htmlFor="domain-blockchain"
                  >
                    <Radio
                      value={'блокчейн'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="domain-blockchain"
                    />
                    Блокчейн
                  </label>
                  <label className="data__radio-label" htmlFor="domain-ai">
                    <Radio
                      value={'искусственный интеллект и аналитика'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="domain-ai"
                    />
                    Искусственный интеллект и аналитика
                  </label>
                  <label
                    className="data__radio-label"
                    htmlFor="domain-internet"
                  >
                    <Radio
                      value={'промышленный интернет и цифровые двойники'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="domain-internet"
                    />
                    Промышленный интернет и цифровые двойники
                  </label>
                  <label className="data__radio-label" htmlFor="domain-robots">
                    <Radio
                      value={
                        'роботы, автономная техника и аддитивные технологии'
                      }
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="domain-robots"
                    />
                    Роботы, автономная техника и аддитивные технологии
                  </label>
                  <label
                    className="data__radio-label"
                    htmlFor="domain-collaborations"
                  >
                    <Radio
                      value={'средства коллаборации'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="domain-collaborations"
                    />
                    Средства коллаборации
                  </label>
                  <label
                    className="data__radio-label"
                    htmlFor="domain-optimizing"
                  >
                    <Radio
                      value={'средства оптимизации процессов'}
                      style={{ color: '#0670B8' }}
                      color="primary"
                      id="domain-optimizing"
                    />
                    Средства оптимизации процессов
                  </label>
                </RadioGroup>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )}
      </div>
    </>
  );
};

export default Filter;
