import {AvailableIcons, QuickAction} from '@/app/domain/entities';
import faker from 'faker';

const availableIcons: AvailableIcons[] = [
  'diagnostic',
  'consultation',
  'nurse',
  'ambulance',
  'laboratory',
  'medicine',
];

export const mockQuickAction = (): QuickAction => {
  return {
    title: faker.random.words(1),
    icon: faker.random.arrayElement(availableIcons),
    active: faker.datatype.boolean(),
  };
};

export const mockQuickActions = (): QuickAction[] => {
  const response: QuickAction[] = [];
  const randomAmount = faker.datatype.number({min: 0, max: 5});
  for (let index = 0; index < randomAmount; index++) {
    response.push(mockQuickAction());
  }
  return response;
};
