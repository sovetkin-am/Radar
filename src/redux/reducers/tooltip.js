import { SET_TOOLTIP_STATE } from '../actions/tooltip';

const initialState = {
  data: {
    script: '',
    description: '',
    technologyGroup: '',
    implementation: '',
    solutionPotential: '',
    readyState: '',
    marketState: '',
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
