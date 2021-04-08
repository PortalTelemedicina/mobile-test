// eslint-disable-next-line no-shadow
export enum ActionTypes {
  getTypeSpecialistsRequest = 'GET_TYPE_SPECIALISTS_REQUEST',
  getTypeSpecialistsSuccess = 'GET_TYPE_SPECIALISTS_SUCCESS',
  getTypeSpecialistsFailure = 'GET_TYPE_SPECIALISTS_FAILURE',
}

export interface ISpecialistType {
  name: string;
  description: string;
  distance: number;
}

export interface ISpecialistItem {
  typeSpecialist: ISpecialistType;
}

export interface ISpecialistTypeState {
  itemsTypesSpecialist: ISpecialistItem[];
  loadingTypes: boolean;
}
