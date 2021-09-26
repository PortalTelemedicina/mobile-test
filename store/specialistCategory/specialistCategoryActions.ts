import {
  GET_ALL_SPECIALIST_CATEGORY_REQUEST,
  GET_ALL_SPECIALIST_CATEGORY_SUCCESS,
  GET_ALL_SPECIALIST_CATEGORY_FAILURE,
} from './specialistCategoryActionTypes';

import {
  GetAllSpecialistCategoryRequest,
  GetAllSpecialistCategorySuccess,
  GetAllSpecialistCategorySuccessPayload,
  GetAllSpecialistCategoryFailure,
  GetAllSpecialistCategoryFailurePayload,
} from './specialistCategoryTypes';

export const getAllSpecialistCategoryRequest = (): GetAllSpecialistCategoryRequest => ({
  type: GET_ALL_SPECIALIST_CATEGORY_REQUEST,
});

export const getAllSpecialistCategorySuccess = (
  payload: GetAllSpecialistCategorySuccessPayload
): GetAllSpecialistCategorySuccess => ({
  type: GET_ALL_SPECIALIST_CATEGORY_SUCCESS,
  payload,
});

export const getAllSpecialistCategoryFailure = (
  payload: GetAllSpecialistCategoryFailurePayload
): GetAllSpecialistCategoryFailure => ({
  type: GET_ALL_SPECIALIST_CATEGORY_FAILURE,
  payload,
});
