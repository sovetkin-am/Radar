export const SET_TOOLTIP_STATE = 'SET_TOOLTIP_STATE';

export function setTooltipState(state) {
  return {
    type: SET_TOOLTIP_STATE,
    state,
  };
}
