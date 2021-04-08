import { Reducer } from 'redux';

import { ISpecialistTypeState, ActionTypes } from './types';

const INITIAL_STATE: ISpecialistTypeState = {
  itemsTypesSpecialist: [],
  loadingTypes: true,
};

const TypeSpecialistReducer: Reducer<ISpecialistTypeState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.getTypeSpecialistsRequest:
      return {
        ...state,
        loadingTypes: true,
      };
    case ActionTypes.getTypeSpecialistsSuccess:
      return {
        ...state,
        loadingTypes: false,
        itemsTypesSpecialist: action.payload,
      };
    case ActionTypes.getTypeSpecialistsFailure:
      return {
        ...state,
        loadingTypes: false,
        itemsTypesSpecialist: [],
      };
    default:
      return state;
  }
};

export default TypeSpecialistReducer;
