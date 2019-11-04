const HIGHT_RADIUS = 10;
const MEDIUM_RADIUS = 7;
const LOW_RADIUS = 5;

const BLUE = 'rgba(6, 112, 184, 0.6)';
const ORANGE = 'rgba(255, 149, 46, 0.6)';

export default function getPointData(props) {
  const {
    solutionPotential,
    script,
    domain,
    marketState,
    readyState,
    implementation,
  } = props;

  const radius = getRadius(solutionPotential, script);
  const degree = getDegree(domain, script);
  const giphotenuse = getGiphotenuse(marketState);
  const position = getPosition(degree, giphotenuse, marketState, readyState);
  const fill = implementation.toLowerCase() === 'да' ? BLUE : ORANGE;

  return {
    ...props,
    position,
    radius,
    fill,
  };
}

function getRadius(solutionPotential, script) {
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
function getDegree(domain, script) {
  switch (domain.toLowerCase()) {
    case 'искусственный интеллект и аналитика':
      return 5 + Math.random() * 40;
    case 'ar/vr и естественные интерфейсы':
      return 50 + Math.random() * 40;
    case 'бвс':
      return 95 + Math.random() * 40;
    case 'роботы, автономная техника и аддитивные технологии':
      return 130 + Math.random() * 40;
    case 'промышленный интернет и цифровые двойники':
      return 185 + Math.random() * 40;
    case 'блокчейн':
      return 230 + Math.random() * 40;
    case 'средства коллаборации':
      return 275 + Math.random() * 40;
    case 'средства оптимизации процессов':
      return 320 + Math.random() * 40;
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
function getPosition(degree, giphotenuse, marketState, readyState) {
  const tRad = (degree * Math.PI) / 180;
  const tSin = Math.sin(tRad);
  const rTop = 350 - tSin * giphotenuse;

  const lRad = ((90 - degree) * Math.PI) / 180;
  const lSin = Math.sin(lRad);
  const rLeft = lSin * giphotenuse + 350;

  const mTop = 140 * (6 - marketState) - 55 + Math.random() * 50;
  const mLeft = 100 * readyState + Math.random() * 50;

  return {
    rTop,
    rLeft,
    mTop,
    mLeft,
  };
}
