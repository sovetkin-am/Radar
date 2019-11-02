import { SET_TOOLTIP_STATE } from '../actions/tooltip';

const initialState = {
  data: {
    script: 'Автоматизированные системы обработки данных геологоразведки',
    description:
      'Использование мобильных рабочих мест для сотрудников, вовлеченных в процесс бурения',
    technologyGroup: 'Самоходные роботы',
    implementation: 'да',
    solutionPotential: 'Высокий',
    readyState: '7',
    marketState: '9',
  },
  position: {
    top: 0,
    left: 0,
  },
  isVisible: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOOLTIP_STATE:
      return {
        ...state,
        ...action.state,
      };

    default:
      return state;
  }
}
