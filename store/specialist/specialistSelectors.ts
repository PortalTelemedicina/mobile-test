import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';
import { ISpecialist } from './specialistTypes';

export const getAllSpecialistByCategory = (state: AppState): ISpecialist[] => state.specialist.specialists;

const getError = (state: AppState) => state.specialist.error;

export const getAllSpecialistByCategorySelector = createSelector(
  getAllSpecialistByCategory,
  (specialists) => specialists
);

export const getErrorSelector = createSelector(getError, (error) => error);
