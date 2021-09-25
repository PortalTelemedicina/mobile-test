import {
  GET_ALL_SPECIALIST_BY_CATEGORY_SUCCESS,
  GET_ALL_SPECIALIST_BY_CATEGORY_FAILURE,
} from './specialistActionTypes';

import { SpecialistActions, SpecialistState } from './specialistTypes';

const initialState: SpecialistState = {
  specialists: [],
  error: null,
};

export default (state = initialState, action: SpecialistActions): any => {
  switch (action.type) {
    case GET_ALL_SPECIALIST_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        specialists: action.payload.specialists,
        error: null,
      };
    case GET_ALL_SPECIALIST_BY_CATEGORY_FAILURE:
      return {
        ...state,
        specialists: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
