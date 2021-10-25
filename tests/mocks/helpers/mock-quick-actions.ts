import {QuickAction} from '@/app/domain/entities';
import faker from 'faker';

export const mockQuickActions = (): QuickAction[] => {
  const response: QuickAction[] = [];
  const randomAmount = faker.datatype.number({min: 0, max: 5});
  for (let index = 0; index < randomAmount; index++) {
    response.push({
      title: faker.random.words(1),
      icon: faker.internet.url(),
      active: faker.datatype.boolean(),
    });
  }
  return response;
};
