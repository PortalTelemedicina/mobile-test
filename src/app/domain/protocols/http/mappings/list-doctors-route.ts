import {AvailableMedicalSpecialties} from '@/app/domain/entities';

export type ListDoctorsRoute = {
  type: AvailableMedicalSpecialties;
  url: string;
};
