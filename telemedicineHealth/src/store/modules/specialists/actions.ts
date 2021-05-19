import { ISpecialist, ActionTypes } from './types';

interface Action {
  type: string;
}

export interface PayloadGetSpecialists extends Action {
  payload: ISpecialist[];
}

export function getSpecialistsRequestAction(): Action {
  return {
    type: ActionTypes.getSpecialistsRequest,
  };
}

export function getSpecialistsRequestSuccessAction(
  specialist: ISpecialist[],
): PayloadGetSpecialists {
  return {
    type: ActionTypes.getSpecialistsSuccess,
    payload: specialist,
  };
}

export function getSpecialistsFailureAction(): Action {
  return {
    type: ActionTypes.getSpecialistsFailure,
  };
}
