import SpecialistInfoDTO from '@dto/SpecialistInfoDTO';

export enum SpecialistListTypes {
  LOAD_REQUEST = '@specialistList/LOAD_REQUEST',
  LOAD_SUCCESS = '@specialistList/LOAD_SUCCESS',
  LOAD_FAILURE = '@specialistList/LOAD_FAILURE',
}

export interface SpecialistList extends SpecialistInfoDTO {};

export interface SpecialistListState {
  specialistList: SpecialistList[];
  loading: boolean;
}