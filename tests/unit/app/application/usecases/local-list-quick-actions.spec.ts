import {mockQuickActions} from '@/../tests/mocks/helpers/mock-quick-actions';
import {LocalQuickActionRepositorySpy} from '@/../tests/mocks/spies/repositories/quick-action-repository-spy';
import {LocalListQuickActions} from '@/app/application/usecases/local-list-quick-actions';

type InitialState = {
  sut: LocalListQuickActions;
  quickActionsRepositorySpy: LocalQuickActionRepositorySpy;
};

const getInitialState = (): InitialState => {
  const quickActionsRepositorySpy = new LocalQuickActionRepositorySpy();
  const sut = new LocalListQuickActions(quickActionsRepositorySpy);
  return {sut, quickActionsRepositorySpy};
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
