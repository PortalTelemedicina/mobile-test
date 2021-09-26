import { SET_LOADING } from './systemActionTypes';

import { SetLoading, SetLoadingPayload } from './systemTypes';

// eslint-disable-next-line import/prefer-default-export
export const setLoading = (payload: SetLoadingPayload): SetLoading => ({
  type: SET_LOADING,
  payload,
});
