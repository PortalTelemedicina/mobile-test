import producer, { Draft } from 'immer';
import { Reducer } from 'redux';

import { SpecialistState, SpecialistTypes } from './types';

const INITIAL_STATE: SpecialistState = {
  data: [],
  loading: false,
};

const Specialist: Reducer<SpecialistState> = (
  currentState = INITIAL_STATE,
  action
) => {
  return producer(currentState, (draft: Draft<SpecialistState>) => {
    switch (action.type) {
      case SpecialistTypes.GET_SPECIALIST_REQUEST:
        draft.loading = true;
        break;
      case SpecialistTypes.GET_SPECIALIST_SUCCESS:
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      case SpecialistTypes.GET_SPECIALIST_FAILURE:
        draft.loading = false;
        draft.data = [];
        break;
      default:
        break;
    }
  });
};

export default Specialist;

