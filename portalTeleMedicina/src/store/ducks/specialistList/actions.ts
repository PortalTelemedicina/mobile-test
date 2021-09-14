import { action } from 'typesafe-actions';

import { SpecialistListTypes, SpecialistList } from './types';

export const specialistListRequest = (specialist: string) => action(SpecialistListTypes.LOAD_REQUEST, { specialist });

export const specialistListSuccess = (data: SpecialistList) => action(SpecialistListTypes.LOAD_SUCCESS, { data });

export const specialistListFailure = () => action(SpecialistListTypes.LOAD_FAILURE);