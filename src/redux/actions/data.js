export const DATA_SET = 'DATA_SET';
export const DATA_REMOVE = 'DATA_REMOVE';
export const DATA_FILTER_SET = 'DATA_FILTER_SET';
export const DATA_FILTER_RESET = 'DATA_FILTER_RESET';

export function dataSet(data) {
  return {
    type: DATA_SET,
    data,
  };
}

export function dataRemove() {
  return {
    type: DATA_REMOVE,
  };
}

export function dataFilterSet(filter) {
  return {
    type: DATA_FILTER_SET,
    filter,
  };
}

export function dataFilterReset() {
  return {
    type: DATA_FILTER_RESET,
  };
}
