import { action } from 'typesafe-actions';

import { SpecialistTypes, Specialist } from './types';

export const specialistRequest = () => action(SpecialistTypes.GET_SPECIALIST_REQUEST);

export const specialistSuccess = (data: Specialist) => action(SpecialistTypes.GET_SPECIALIST_SUCCESS, { data });

export const specialistFailure = () => action(SpecialistTypes.GET_SPECIALIST_FAILURE);