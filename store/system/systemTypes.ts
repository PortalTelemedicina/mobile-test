import { SET_LOADING } from './systemActionTypes';

export interface SystemState {
  loading: boolean;
}

export interface SetLoadingPayload {
  loading: boolean;
}

export interface SetLoading {
  type: typeof SET_LOADING;
  payload: SetLoadingPayload;
}

export type SystemActions = SetLoading;
