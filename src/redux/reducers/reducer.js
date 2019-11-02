import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import tooltip from './tooltip';
import data from './data';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    tooltip,
    data,
  });

export default createRootReducer;
