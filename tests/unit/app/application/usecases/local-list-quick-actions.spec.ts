import {LocalQuickActionRepositorySpy} from '@/../tests/mocks/spies/quick-action-repository-spy';
import {LocalListQuickActions} from '@/app/application/usecases/local-list-quick-actions';
import {QuickAction} from '@/app/domain/entities';
import faker from 'faker';

type InitialState = {
  sut: LocalListQuickActions;
  quickActionsRepositorySpy: LocalQuickActionRepositorySpy;
};

const getInitialState = (): InitialState => {
  const quickActionsRepositorySpy = new LocalQuickActionRepositorySpy();
  const sut = new LocalListQuickActions(quickActionsRepositorySpy);
  return {sut, quickActionsRepositorySpy};
};

const mockQuickActions = (): QuickAction[] => {
  const response: QuickAction[] = [];
  const randomAmount = faker.datatype.number({min: 0, max: 20});
  for (let index = 0; index < randomAmount; index++) {
    response.push({
      title: faker.random.words(2),
      icon: faker.internet.url(),
      active: faker.datatype.boolean(),
    });
  }
  return response;
};

describe('LocalListQuickActions', () => {
  test('should call repository', () => {
    const {sut, quickActionsRepositorySpy} = getInitialState();
    sut.run();
    expect(quickActionsRepositorySpy.calls).toBe(1);
  });

  test('should return quick actions', () => {
    const {sut, quickActionsRepositorySpy} = getInitialState();
    const mockActions = mockQuickActions();
    quickActionsRepositorySpy.quickActions = mockActions;
    const actions = sut.run();
    expect(actions).toEqual(mockActions);
  });
});
