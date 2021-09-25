import {
  GET_ALL_SPECIALIST_CATEGORY_REQUEST,
  GET_ALL_SPECIALIST_CATEGORY_SUCCESS,
  GET_ALL_SPECIALIST_CATEGORY_FAILURE,
} from "./specialistCategoryActionTypes";

export interface ISpecialistCategory {
  name: string;
  image_url: string;
  total: number;
  color: string;
}

export interface SpecialistCategoryState {
  pending: boolean;
  specialistsCategories: ISpecialistCategory[];
  error: string | null;
}

export interface GetAllSpecialistCategorySuccessPayload {
  specialistsCategories: ISpecialistCategory[];
}

export interface GetAllSpecialistCategoryFailurePayload {
  error: string;
}

export interface GetAllSpecialistCategoryRequest {
  type: typeof GET_ALL_SPECIALIST_CATEGORY_REQUEST;
}

export type GetAllSpecialistCategorySuccess = {
  type: typeof GET_ALL_SPECIALIST_CATEGORY_SUCCESS;
  payload: GetAllSpecialistCategorySuccessPayload;
};

export type GetAllSpecialistCategoryFailure = {
  type: typeof GET_ALL_SPECIALIST_CATEGORY_FAILURE;
  payload: GetAllSpecialistCategoryFailurePayload;
};

export type SpecialistCategoryActions =
  | GetAllSpecialistCategoryRequest
  | GetAllSpecialistCategorySuccess
  | GetAllSpecialistCategoryFailure;
