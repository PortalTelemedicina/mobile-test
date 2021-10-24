import {MedicalSpecialties} from '../entities';

export interface ListMedicalSpecialties {
  run(): Promise<MedicalSpecialties[]>;
}
