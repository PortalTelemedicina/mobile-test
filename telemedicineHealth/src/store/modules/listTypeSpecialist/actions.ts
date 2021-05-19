import { ISpecialistType, ActionTypes } from './types';

interface Action {
  type: string;
}

export interface PayloadGetSpecialists extends Action {
  payload: ISpecialistType[];
}

export interface PayloadGetSpecialistRequest extends Action {
  payload: string;
}

export function getSpecialistsTypesRequestAction(
  typeSpecialist: string,
): PayloadGetSpecialistRequest {
  return {
    type: ActionTypes.getTypeSpecialistsRequest,
    payload: typeSpecialist,
  };
}

export function getSpecialistsTypesRequestSuccessAction(
  specialist: ISpecialistType[],
): PayloadGetSpecialists {
  return {
    type: ActionTypes.getTypeSpecialistsSuccess,
    payload: specialist,
  };
}

export function getSpecialistsTypesFailureAction(): Action {
  return {
    type: ActionTypes.getTypeSpecialistsFailure,
  };
}
