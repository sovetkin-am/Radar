import React from 'react';
import { useDispatch } from 'react-redux';
import { setTooltipState } from '../../redux/actions/tooltip';

const TOOLTIP_MARGIN_TOP = 15;
const TOOLTIP_MARGIN_LEFT = 15;

const HIGHT_RADIUS = 10;
const MEDIUM_RADIUS = 7;
const LOW_RADIUS = 5;

const Point = props => {
  const dispatch = useDispatch();
  const { script, solutionPotential, marketState, domain } = props;

  const radius = getRadius(solutionPotential);
  const degree = getDegree(domain);
  const giphotenuse = getGiphotenuse(marketState);
  const position = getPosition(degree, giphotenuse);

  const showTooltip = e => {
    const position = {
      top: e.pageY + TOOLTIP_MARGIN_TOP,
      left: e.pageX + TOOLTIP_MARGIN_LEFT,
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
        return Math.random() * 45;
      case 'ar/vr и естественные интерфейсы':
        return 45 + Math.random() * 45;
      case 'бвс':
        return 90 + Math.random() * 45;
      case 'роботы, автономная техника и аддитивные технологии':
        return 135 + Math.random() * 45;
      case 'промышленный интернет и цифровые двойники':
        return 180 + Math.random() * 45;
      case 'блокчейн':
        return 225 + Math.random() * 45;
      case 'средства коллаборации':
        return 270 + Math.random() * 45;
      case 'средства оптимизации процессов':
        return 315 + Math.random() * 45;
      default:
        console.error('Некорректный домен: ' + script + ', домен: ' + domain);

        return Math.random() * 360;
    }
  }
  function getGiphotenuse(marketState) {
    /*
      Точки с marketState = 5, должны располагаться в первой половине первого круга
      Точки с marketState = 4, должны располагаться во второй половине первого круга
      Точки с marketState = 3, должны располагаться в первой половине второго круга
      Точки с marketState = 2, должны располагаться во второй половине второго круга
      Точки с marketState = 1, должны располагаться в третьем круге
    */

    if (marketState === 5) {
      return 10 + Math.random() * 55;
    } else if (marketState === 4) {
      return 65 + Math.random() * 65;
    } else if (marketState === 3) {
      return 130 + Math.random() * 35;
    } else if (marketState === 2) {
      return 165 + Math.random() * 35;
    }

    return 200 + Math.random() * 40;
  }
  function getPosition(degree, giphotenuse) {
    const tRad = (degree * Math.PI) / 180;
    const tSin = Math.sin(tRad);
    const top = 350 - tSin * giphotenuse;

    const lRad = ((90 - degree) * Math.PI) / 180;
    const lSin = Math.sin(lRad);
    const left = lSin * giphotenuse + 350;

    return {
      top,
      left,
    };
  }

  return (
    <circle
      r={radius}
      cx={position.left}
      cy={position.top}
      fill="orange"
      onMouseMove={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={() => console.log(degree, giphotenuse, position)}
    />
  );
};

export default Point;
