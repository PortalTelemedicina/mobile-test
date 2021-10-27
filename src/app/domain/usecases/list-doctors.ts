import {AvailableMedicalSpecialties, Doctor} from '../entities';

export type ListDoctorsParams = {
  type: AvailableMedicalSpecialties;
};
export interface ListDoctors {
  run(params: ListDoctorsParams): Promise<Doctor[]>;
}
