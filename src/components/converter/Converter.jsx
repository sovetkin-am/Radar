import React from 'react';
import XLSX from 'xlsx';
import { useDispatch } from 'react-redux';
import { dataSet } from '../../redux/actions/data';

const Converter = () => {
  const dispatch = useDispatch();

  const convertFile = event => {
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
  };

  return (
    <label>
      Загрузи Excel (json смотреть в консоли);
      <br/>
      <input type="file" onChange={convertFile} />
    </label>
  );
};

export default Converter;
