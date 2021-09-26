// eslint-disable-next-line no-shadow
export enum ActionTypes {
  getSpecialistsRequest = 'GET_SPECIALISTS_REQUEST',
  getSpecialistsSuccess = 'GET_SPECIALISTS_SUCCESS',
  getSpecialistsFailure = 'GET_SPECIALISTS_FAILURE',
}

export interface ISpecialist {
  name: string;
  image_url: string;
  total: number;
  color: string;
}

export interface ISpecialistItem {
  specialist: ISpecialist;
}

export interface ISpecialistsState {
  items: ISpecialistItem[];
  loading: boolean;
}
