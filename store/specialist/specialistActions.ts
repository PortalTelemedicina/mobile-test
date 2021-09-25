import {
  GET_ALL_SPECIALIST_BY_CATEGORY_REQUEST,
  GET_ALL_SPECIALIST_BY_CATEGORY_SUCCESS,
  GET_ALL_SPECIALIST_BY_CATEGORY_FAILURE,
} from './specialistActionTypes';

import {
  GetAllSpecialistByCategoryRequest,
  GetAllSpecialistByCategoryRequestPayload,
  GetAllSpecialistByCategorySuccess,
  GetAllSpecialistByCategorySuccessPayload,
  GetAllSpecialistByCategoryFailure,
  GetAllSpecialistByCategoryFailurePayload,
} from './specialistTypes';

export const getAllSpecialistByCategoryRequest = (
  payload: GetAllSpecialistByCategoryRequestPayload
): GetAllSpecialistByCategoryRequest => ({
  type: GET_ALL_SPECIALIST_BY_CATEGORY_REQUEST,
  payload,
});

export const getAllSpecialistByCategorySuccess = (
  payload: GetAllSpecialistByCategorySuccessPayload
): GetAllSpecialistByCategorySuccess => ({
  type: GET_ALL_SPECIALIST_BY_CATEGORY_SUCCESS,
  payload,
});

export const getAllSpecialistByCategoryFailure = (
  payload: GetAllSpecialistByCategoryFailurePayload
): GetAllSpecialistByCategoryFailure => ({
  type: GET_ALL_SPECIALIST_BY_CATEGORY_FAILURE,
  payload,
});
