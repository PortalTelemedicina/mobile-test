import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';
import { ISpecialistCategory } from './specialistCategoryTypes';

export const getAllSpecialistCategory = (state: AppState): ISpecialistCategory[] =>
  state.specialistCategory.specialistsCategories;

const getError = (state: AppState) => state.specialistCategory.error;

export const getAllSpecialistCategorySelector = createSelector(
  getAllSpecialistCategory,
  (specialistsCategories) => specialistsCategories
);

export const getErrorSelector = createSelector(getError, (error) => error);
