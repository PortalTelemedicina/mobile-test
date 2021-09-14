import producer, { Draft } from 'immer';
import { Reducer } from 'redux';

import { SpecialistListState, SpecialistListTypes } from './types';

const INITIAL_STATE: SpecialistListState = {
  specialistList: [],
  loading: false,
};

const SpecialistInfo: Reducer<SpecialistListState> = (
  currentState = INITIAL_STATE,
  action
) => {
  return producer(currentState, (draft: Draft<SpecialistListState>) => {
    switch (action.type) {
      case SpecialistListTypes.LOAD_REQUEST:
        draft.loading = true;
        break;
      case SpecialistListTypes.LOAD_SUCCESS:
        draft.loading = false;
        draft.specialistList = action.payload.data;
        break;
      case SpecialistListTypes.LOAD_FAILURE:
        draft.loading = false;
        draft.specialistList = [];
        break;
      default:
        break;
    }
  });
};

export default SpecialistInfo;

