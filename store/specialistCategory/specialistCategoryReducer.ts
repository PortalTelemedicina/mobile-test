import {
  GET_ALL_SPECIALIST_CATEGORY_REQUEST,
  GET_ALL_SPECIALIST_CATEGORY_SUCCESS,
  GET_ALL_SPECIALIST_CATEGORY_FAILURE,
} from './specialistCategoryActionTypes';

import { SpecialistCategoryActions, SpecialistCategoryState } from './specialistCategoryTypes';

const initialState: SpecialistCategoryState = {
  pending: false,
  specialistsCategories: [],
  error: null,
};

export default (state = initialState, action: SpecialistCategoryActions) => {
  switch (action.type) {
    case GET_ALL_SPECIALIST_CATEGORY_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_SPECIALIST_CATEGORY_SUCCESS:
      return {
        ...state,
        pending: false,
        specialistsCategories: action.payload.specialistsCategories,
        error: null,
      };
    case GET_ALL_SPECIALIST_CATEGORY_FAILURE:
      return {
        ...state,
        pending: false,
        specialistsCategories: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
