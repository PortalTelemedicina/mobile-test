import { SET_LOADING } from './systemActionTypes';

import { SystemActions, SystemState } from './systemTypes';

const initialState: SystemState = {
  loading: false,
};

export default (state = initialState, action: SystemActions) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return {
        ...state,
      };
  }
};
