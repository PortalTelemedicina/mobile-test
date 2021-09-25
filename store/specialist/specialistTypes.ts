import {
  GET_ALL_SPECIALIST_BY_CATEGORY_REQUEST,
  GET_ALL_SPECIALIST_BY_CATEGORY_SUCCESS,
  GET_ALL_SPECIALIST_BY_CATEGORY_FAILURE,
} from './specialistActionTypes';

export interface ISpecialist {
  name: string;
  description: string;
  distance: any;
  actions: {
    chat: string;
    call: string;
  };
}

export interface SpecialistState {
  specialists: ISpecialist[];
  error: string | null;
}

export interface GetAllSpecialistByCategorySuccessPayload {
  specialists: ISpecialist[];
}

export interface GetAllSpecialistByCategoryFailurePayload {
  error: string;
}

export interface GetAllSpecialistByCategoryRequestPayload {
  category: string;
}

export interface GetAllSpecialistByCategoryRequest {
  type: typeof GET_ALL_SPECIALIST_BY_CATEGORY_REQUEST;
  payload: GetAllSpecialistByCategoryRequestPayload;
}

export type GetAllSpecialistByCategorySuccess = {
  type: typeof GET_ALL_SPECIALIST_BY_CATEGORY_SUCCESS;
  payload: GetAllSpecialistByCategorySuccessPayload;
};

export type GetAllSpecialistByCategoryFailure = {
  type: typeof GET_ALL_SPECIALIST_BY_CATEGORY_FAILURE;
  payload: GetAllSpecialistByCategoryFailurePayload;
};

export type SpecialistActions =
  | GetAllSpecialistByCategoryRequest
  | GetAllSpecialistByCategorySuccess
  | GetAllSpecialistByCategoryFailure;
