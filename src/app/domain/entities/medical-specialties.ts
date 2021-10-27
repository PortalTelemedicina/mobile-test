export type AvailableMedicalSpecialties =
  | 'cardiologist'
  | 'dentist'
  | 'dermatologist';

export interface MedicalSpecialties {
  name: string;
  amountAvailable: number;
  image: string;
  color: string;
}
