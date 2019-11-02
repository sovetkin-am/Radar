import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import tooltip from './tooltip';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    tooltip,
  });

export default createRootReducer;
