import {
  DATA_SET,
  DATA_REMOVE,
  DATA_FILTER_SET,
  DATA_FILTER_RESET,
} from '../actions/data';
import getPointData from '../../utils/getPointData';

const initialState = {
  data: [],
  filteredData: [],
  filter: {
    readyState: [1, 7],
    marketState: [1, 5],
    implementation: {
      gpn: true,
      outsourcing: true,
    },
    functionalGroup: 'all',
    domain: 'all',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DATA_SET: {
      const data = action.data.map(pointData => getPointData(pointData));

      return {
        ...state,
        data,
        filteredData: data,
      };
    }

    case DATA_REMOVE:
      return initialState;

    case DATA_FILTER_SET: {
      const filter = {
        ...state.filter,
        ...action.filter,
      };

      return {
        ...state,
        filter,
        filteredData: state.data.filter(data => {
          const [readyStateMin, readyStateMax] = filter.readyState;
          if (
            readyStateMin > data.readyState ||
            readyStateMax < data.readyState
          ) {
            return false;
          }

          const [marketStateMin, marketStateMax] = filter.marketState;
          if (
            marketStateMin > data.marketState ||
            marketStateMax < data.marketState
          ) {
            return false;
          }

          if (
            !filter.implementation.gpn &&
            data.implementation.toLowerCase() === 'да'
          ) {
            return false;
          } else if (
            !filter.implementation.outsourcing &&
            data.implementation.toLowerCase() === 'нет'
          ) {
            return false;
          }

          if (
            filter.functionalGroup !== 'all' &&
            filter.functionalGroup !== data.functionalGroup.toLowerCase()
          ) {
            return false;
          }

          if (
            filter.domain !== 'all' &&
            filter.domain !== data.domain.toLowerCase()
          ) {
            return false;
          }

          return true;
        }),
      };
    }
    case DATA_FILTER_RESET:
      return {
        ...state,
        filter: initialState.filter,
        filteredData: [...state.data],
      };

    default:
      return state;
  }
}
