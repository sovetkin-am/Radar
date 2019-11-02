import React from 'react';
import { useDispatch } from 'react-redux';
import { setTooltipState } from '../../redux/actions/tooltip';

const TOOLTIP_MARGIN_TOP = 15;
const TOOLTIP_MARGIN_LEFT = 15;

const HIGHT_RADIUS = 15;
const MEDIUM_RADIUS = 10;
const LOW_RADIUS = 5;

const Point = props => {
  const dispatch = useDispatch();
  const {
    script,
    description,
    technologyGroup,
    implementation,
    solutionPotential,
    readyState,
    marketState,
    domain,
  } = props;

  const radius = getRadius(solutionPotential);
  const degree = getDegree(domain);
  const giphotenuse = getGiphotenuse(marketState);
  const position = getPosition(degree, giphotenuse);

  const showTooltip = e => {
    const position = {
      top: e.pageY + TOOLTIP_MARGIN_TOP,
      left: e.pageX + TOOLTIP_MARGIN_LEFT
    };

    window.requestAnimationFrame(() => {
      dispatch(setTooltipState({ position, isVisible: true, data: props }));
    });
  };

  const hideTooltip = () => {
    window.requestAnimationFrame(() =>
      dispatch(setTooltipState({ isVisible: false }))
    );
  };

  function getRadius(solutionPotential) {
    switch (solutionPotential.toLowerCase()) {
      case 'высокий':
        return HIGHT_RADIUS;
      case 'средний':
        return MEDIUM_RADIUS;
      case 'низкий':
        return LOW_RADIUS;
      default:
        console.error('Некорректный потенциал решения: ' + script);

        return 0;
    }
  }
  function getDegree(domain) {
    switch (domain.toLowerCase()) {
      case 'искусственный интеллект и аналитика':
        return 5 + Math.random() * (40 - 5);
      case 'ar/vr и естественные интерфейсы':
        return 50 + Math.random() * (85 - 50);
      case 'бвс':
        return 90 + Math.random() * (130 - 90);
      case 'роботы, автономная техника и аддитивные технологии':
        return 140 + Math.random() * (175 - 140);
      case 'промышленный интернет и цифровые двойники':
        return 185 + Math.random() * (220 - 185);
      case 'блокчейн':
        return 230 + Math.random() * (230 - 265);
      case 'средства коллаборации':
        return 275 + Math.random() * (310 - 275);
      case 'средства оптимизации процессов':
        return 320 + Math.random() * (355 - 320);
      default:
        console.error('Некорректный домен: ' + script + ', домен: ' + domain);
        console.log(domain.toLowerCase());

        return Math.random() * 360;
    }
  }
  function getGiphotenuse(marketState) {
    // min (1 - минимальный УРЗ) + max (5 - максимальный УРЗ) - УРЗ = обратный УРЗ
    // 250 (радиус радара) / 5 (кол-во уровней рыночной зрелости) = 50
    // 3 (цвето-круга) / 5 (кол-во уровней рыночной зрелости) = 0.6
    return (6 - marketState) * 50 * 0.6;
  }
  function getPosition(degree, giphotenuse) {
    const tRad = (degree * Math.PI) / 180;
    const tSin = Math.sin(tRad);
    const top = 350 - (tSin * giphotenuse);

    const lRad = ((90 - degree) * Math.PI) / 180;
    const lSin = Math.sin(lRad);
    const left = lSin * giphotenuse + 350;

    return {
      top,
      left
    }
  }

  return (
    <circle
      r={radius}
      cx={position.left}
      cy={position.top}
      fill="orange"
      onMouseMove={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={() => console.log(degree, position)}
    />
  );
};

export default Point;
