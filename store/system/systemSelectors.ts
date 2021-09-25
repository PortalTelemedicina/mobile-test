import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

export const isLoading = (state: AppState): boolean => state.system.loading;

export const isLoadingSelector = createSelector(isLoading, (loading) => loading);
