import { Reducer } from 'redux';

import { ISpecialistsState, ActionTypes } from './types';

const INITIAL_STATE: ISpecialistsState = {
  items: [],
  loading: true,
};

const specialistReducer: Reducer<ISpecialistsState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.getSpecialistsRequest:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.getSpecialistsSuccess:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case ActionTypes.getSpecialistsFailure:
      return {
        ...state,
        loading: false,
        items: [],
      };
    default:
      return state;
  }
};

export default specialistReducer;
