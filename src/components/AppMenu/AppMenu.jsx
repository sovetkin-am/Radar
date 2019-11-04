import React from 'react';

import './AppMenu.scss';
import { Link } from 'react-router-dom';
import XLSX from 'xlsx';
import { dataRemove, dataSet } from '../../redux/actions/data';
import { useDispatch, useSelector } from 'react-redux';

const AppMenu = () => {
  const dispatch = useDispatch();
  const location = useSelector(store => store.router.location.pathname);

  const convertFile = event => {
    dispatch(dataRemove());

    try {
      const selectedFile = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        const result = event.target.result;
        const workbook = XLSX.read(result, {
          type: 'binary',
        });

        const data = XLSX.utils
          .sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]])
          .map(dataItem => ({
            script: dataItem['Наименование сценария'],
            description:
              dataItem['Описание'] ||
              'Тут должно быть описание, но в Excel его нет',
            technologyGroup: dataItem['Подгруппа сценариев'],
            implementation: dataItem['Реализуется в Газпром нефти?'],
            solutionPotential: dataItem['Потенциал решения'],
            readyState: dataItem['Организационная готовность (1-7)'],
            marketState: dataItem['Рыночная зрелость (1-5)'],
            domain: dataItem['Домен'],
            functionalGroup: dataItem['Функциональная группа'],
          }));

        dispatch(dataSet(data));
      };

      reader.onerror = function(event) {
        console.error(
          'File could not be read! Code ' + event.target.error.code
        );
      };

      reader.readAsBinaryString(selectedFile);
      event.target.value = '';
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="app-menu">
      <div className="app-menu__logo">
        <svg
          width="100"
          height="55"
          viewBox="0 0 131 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M107.258 38.0382C107.762 38.0382 108.184 37.6513 108.184 37.1744V37.1474V22.5152V22.4522L108.175 22.3802C108.13 21.9573 107.735 21.6153 107.249 21.6153C106.763 21.6153 106.385 21.9573 106.331 22.3802V22.4522V22.5152V37.1474L106.322 37.1744C106.322 37.6513 106.745 38.0382 107.258 38.0382ZM108.985 18.9066C111.919 18.9066 112.108 21.2823 112.108 22.8031V36.8324C112.108 38.3622 111.928 40.7379 108.985 40.7379H105.521C102.587 40.7379 102.407 38.3622 102.407 36.8324V22.8031C102.407 21.2733 102.587 18.9066 105.521 18.9066H108.985ZM43.6445 18.9066H51.6445V21.6153H47.838V40.7289H43.6445V18.9066ZM54.4432 18.9066H61.0304L63.2171 40.7289H59.1226L58.7357 34.9246H56.7559L56.36 40.7289H52.2655L54.4432 18.9066ZM58.5737 32.5309L57.8538 21.6153H57.6198L56.8909 32.5309H58.5737ZM69.2283 33.0889V37.1923C69.2283 37.7593 69.6423 37.9123 69.8853 37.9123C70.2722 37.9123 70.5422 37.5703 70.5422 37.1923V32.126C70.5422 31.4421 70.4252 30.6952 68.8684 30.6952H67.1676V28.2925H68.9314C70.1282 28.2925 70.5512 28.0045 70.5512 26.6727V22.3352C70.5512 21.9573 70.2812 21.6153 69.8943 21.6153C69.6513 21.6153 69.2374 21.7683 69.2374 22.3352V25.8898H65.0349V22.8031C65.0349 21.2733 65.2239 18.9066 68.1485 18.9066H71.622C74.5557 18.9066 74.7357 21.2823 74.7357 22.8031V26.3037C74.7357 28.6704 73.1429 29.3183 71.883 29.2553V29.4803C74.6997 29.4083 74.7357 31.658 74.7357 32.4409V36.8324C74.7357 38.3622 74.5557 40.7379 71.622 40.7379H68.1485C65.2149 40.7379 65.0349 38.3622 65.0349 36.8324V33.0889H69.2283ZM77.4893 18.9066H87.1991V40.7289H83.2846V21.6153H81.4038V40.7289H77.4983V18.9066H77.4893ZM90.2317 18.9066H96.8189C99.7525 18.9066 100.22 21.2823 100.22 22.8031V29.4083C100.22 30.9381 99.7525 33.3138 96.8189 33.3138H94.4252V40.7289H90.2317V18.9066ZM95.5231 30.9111C95.982 30.9111 96.306 30.5062 96.306 29.8223V22.7132C96.306 22.0292 95.982 21.6243 95.5231 21.6243H94.4162V30.9201H95.5231V30.9111ZM125.48 18.9066H130.934V40.7289H126.74V27.0416H126.596L124.436 40.7289H121.08L118.929 27.0416H118.785V40.7289H114.583V18.9066H120.027L122.745 34.2407L125.48 18.9066ZM34.7087 21.1294C34.7537 18.9156 34.5377 15.1631 33.4578 11.2396C32.378 7.31608 30.2722 3.58155 29.9663 3.10461C29.6603 3.59055 27.9955 6.61417 26.5287 11.3566C26.1417 12.7784 25.4488 15.865 25.3228 18.8706C25.1789 22.5152 25.6738 26.1327 25.8718 27.1586C25.8718 25.9528 25.8988 21.9303 26.6457 18.6097C27.3926 15.2801 28.8144 11.4556 29.9663 9.51181C31.2171 11.5636 32.7829 15.982 33.3318 18.6277C33.8898 21.2823 34.1777 24.6659 34.0607 27.0686C34.3937 25.6738 34.6547 23.3341 34.7087 21.1294ZM29.9843 38.0652C30.6592 36.8144 31.82 34.0697 31.712 30.5872C31.5681 27.0326 30.3712 24.4229 30.0023 23.802C29.5883 24.4229 28.1935 27.4106 28.2205 30.9111C28.3285 34.5017 29.3363 36.8414 29.9843 38.0652ZM35.0866 11.2846C36.4005 17.0799 36.3825 20.6434 35.8065 24.7109C34.7717 32.027 31.4421 37.6243 30.0023 39.5051C29.0124 38.2272 27.5006 35.6265 26.4927 33.2058C26.4927 33.2058 24.5849 28.5894 24.081 24.09C23.5771 19.5905 23.793 15.0101 25.2598 9.86277C26.6187 5.23735 29.2643 1.07986 29.9843 0C30.4432 0.764904 33.7638 5.48931 35.0866 11.2846ZM37.8043 40.7289V55.658C33.8178 59.8965 28.1485 62.5512 21.8583 62.5512C9.79078 62.5602 0 52.8054 0 40.7829C0 28.7694 9.79078 19.0236 21.8583 19.0236V35.3926C18.7177 35.3926 15.5771 36.5894 13.1834 38.9741C12.6074 39.5411 12.1125 40.153 11.6805 40.7919C8.46794 45.5433 8.96288 52.0585 13.1834 56.261C15.5771 58.6367 18.7177 59.8425 21.8583 59.8425C24.9809 59.8425 28.1125 58.6637 30.5062 56.288C30.5152 56.27 30.5332 56.27 30.5422 56.261V56.243L30.5782 56.216C32.9809 53.8313 32.9809 49.9438 30.5782 47.5681C28.1755 45.1744 24.288 45.1744 21.8943 47.5681C21.8763 47.577 21.8673 47.577 21.8673 47.595V40.7379H37.8043V40.7289ZM127.019 56.4229C127.019 54.5242 126.218 54.0202 124.04 54.0202H123.672V50.3667H121.458V59.8425H123.672C126.074 59.8425 127.019 59.4736 127.019 57.3948V56.4229ZM108.553 50.3577H102.983V52.1575H104.783V59.8515H106.889V52.1575H108.562V50.3577H108.553ZM91.5276 53.4983C91.5276 51.5636 90.5827 51.0686 88.369 51.0686V50.3577H86.2182V51.0686C83.9955 51.0686 83.0506 51.5636 83.0506 53.4983V56.4589C83.0506 58.3847 84.0405 58.8976 86.2182 58.8976V59.8335H88.369V58.8976C90.5467 58.8976 91.5276 58.3847 91.5276 56.4589V53.4983ZM71.4691 50.3577H66.1597V59.8515H71.4691V58.0517H68.4454V55.82H71.1541V54.0202H68.4454V52.1485H71.4691V50.3577ZM53.1204 50.3667H50.9066V54.0202H49.7728V50.3667H47.5591V59.8425H49.7728V55.694H50.9066V59.8425H53.1204V50.3667ZM130.934 62.5602H43.6445V48H130.934V62.5602ZM85.2014 53.4353C85.2014 52.8864 85.3813 52.7424 85.8673 52.7424H86.2272V57.1519H85.8673C85.3813 57.1519 85.2014 57.0259 85.2014 56.4679V53.4353ZM124.157 55.694C124.652 55.694 124.805 55.82 124.805 56.36V57.5028C124.805 58.0427 124.652 58.1687 124.157 58.1687H123.663V55.694H124.157ZM88.7199 52.7424C89.2149 52.7424 89.3858 52.8504 89.3858 53.4173V56.4679C89.3858 57.0259 89.2149 57.1609 88.7199 57.1609H88.369V52.7514H88.7199"
            fill="#006FBA"
          />
        </svg>
      </div>
      <ul className="app-menu__list">
        <li className="app-menu__list-item">
          <input
            type="file"
            id="file"
            className="data__file"
            onChange={convertFile}
          />
          <label className="app-menu__link" htmlFor="file">
            Загрузить файл
          </label>
        </li>
        <li
          className={`app-menu__list-item ${
            location === '/radar' ? 'app-menu__list-item_active' : ''
          }`}
        >
          <Link className="app-menu__link" to={'/radar'}>
            Радар
          </Link>
        </li>
        <li
          className={`app-menu__list-item ${
            location === '/matrix' ? 'app-menu__list-item_active' : ''
          }`}
        >
          <Link className="app-menu__link" to={'/matrix'}>
            Матрица
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppMenu;
