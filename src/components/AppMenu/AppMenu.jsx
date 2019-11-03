import React from 'react';

import './AppMenu.scss';
import { Link } from 'react-router-dom';
import XLSX from 'xlsx';
import { dataRemove, dataSet } from '../../redux/actions/data';
import { useDispatch } from 'react-redux';

const AppMenu = () => {
  const dispatch = useDispatch()
  const convertFile = event => {
    dispatch(dataRemove());
    try {
      const selectedFile = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        const result = event.target.result;
        const workbook = XLSX.read(result, {
          type: 'binary'
        });

        const data = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]).map(dataItem => ({
          script: dataItem['Наименование сценария'],
          description: dataItem['Описание'] || 'Тут должно быть описание, но в Excel его нет',
          technologyGroup: dataItem['Подгруппа сценариев'],
          implementation: dataItem['Реализуется в Газпром нефти?'],
          solutionPotential: dataItem['Потенциал решения'],
          readyState: dataItem['Организационная готовность (1-7)'],
          marketState: dataItem['Рыночная зрелость (1-5)'],
          domain: dataItem['Домен'],
          functionalGroup: dataItem['Функциональная группа']
        }));

        dispatch(dataSet(data));
      };

      reader.onerror = function(event) {
        console.error("File could not be read! Code " + event.target.error.code);
      };

      reader.readAsBinaryString(selectedFile);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="app-menu">
      <div className="app-menu__logo">Название сервиса</div>
      <ul className="app-menu__list">
        <li className="app-menu__list-item">
          <input type="file" id="file" className="data__file" onChange={convertFile} />
          <label className="app-menu__link" htmlFor="file">
            Загрузить файл
          </label>
        </li>
        <li className="app-menu__list-item">
          <Link className="app-menu__link" to={'/radar'}>
            Радар
          </Link>
        </li>
        <li className="app-menu__list-item">
          <Link className="app-menu__link" to={'/matrix'}>
            Матрица
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppMenu;
