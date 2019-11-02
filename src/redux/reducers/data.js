import { SET_DATA } from '../actions/data';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return action.data;

    default:
      return state;
  }
}
