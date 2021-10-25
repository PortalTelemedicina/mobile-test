import {MedicalSpecialties} from '@/app/domain/entities';
import {ListMedicalSpecialties} from '@/app/domain/usecases';

export class ListMedicalSpecialtiesSpy implements ListMedicalSpecialties {
  medicalSpecialties?: MedicalSpecialties[] = [];
  calls?: number = 0;

  async run(): Promise<MedicalSpecialties[]> {
    this.calls += 1;
    return this.medicalSpecialties;
  }
}
