import {MedicalSpecialties} from '@/app/domain/entities';
import faker from 'faker';

export const mockMedicalSpecialty = (): MedicalSpecialties => {
  return {
    name: faker.random.words(1),
    image: faker.random.words(1),
    amountAvailable: faker.datatype.number({min: 0, max: 20}),
    color: faker.random.words(1),
  };
};

export const mockMedicalSpecialties = (): MedicalSpecialties[] => {
  const response: MedicalSpecialties[] = [];
  const randomAmount = faker.datatype.number({min: 0, max: 5});
  for (let index = 0; index < randomAmount; index++) {
    response.push(mockMedicalSpecialty());
  }
  return response;
};
