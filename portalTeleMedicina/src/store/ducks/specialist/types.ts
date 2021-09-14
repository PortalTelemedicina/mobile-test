import SpecialistDTO from '@dto/SpecialistDTO';

export enum SpecialistTypes {
  GET_SPECIALIST_REQUEST = '@specialist/GET_SPECIALIST_REQUEST',
  GET_SPECIALIST_SUCCESS = '@specialist/GET_SPECIALIST_SUCCESS',
  GET_SPECIALIST_FAILURE = '@specialist/GET_SPECIALIST_FAILURE',
}

export interface Specialist extends SpecialistDTO {}

export interface SpecialistState {
  data: Specialist[];
  loading: boolean;
}