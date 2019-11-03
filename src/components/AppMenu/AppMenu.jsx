import React  from 'react';

import './AppMenu.scss';
import { Link } from 'react-router-dom';

const AppMenu = () => {
  return (
    <nav className="app-menu">
      <div className="app-menu__logo">Название сервиса</div>
      <ul className="app-menu__list">
        <li className="app-menu__list-item"><Link className="app-menu__link" to={'/upload'}>Загрузить файл</Link></li>
        <li className="app-menu__list-item"><Link className="app-menu__link" to={'/radar'}>Радар</Link></li>
        <li className="app-menu__list-item"><Link className="app-menu__link" to={'/matrix'}>Матрица</Link></li>
      </ul>
    </nav>
  );
};

export default AppMenu;
