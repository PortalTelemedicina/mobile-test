import {mockQuickAction} from '@/../tests/mocks/helpers/mock-quick-actions';
import QuickActionIcon, {
  QuickActionIconProps,
} from '@/app/UI/pages/list-specialists/components/quick-action-icon';
import {UIKittenProvider} from '@/app/UI/shared/components';
import {
  cleanup,
  render,
  RenderAPI,
  waitFor,
} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';

type InitialState = {
  sut: RenderAPI;
};

const getInitialState = (params: QuickActionIconProps): InitialState => {
  const {action = mockQuickAction(), color = faker.random.word()} = params;
  const sut = render(
    <UIKittenProvider>
      <QuickActionIcon action={action} color={color} />
    </UIKittenProvider>,
  );
  return {sut};
};

describe('QuickActionIcon', () => {
  afterEach(cleanup);

  test('should render correct icon with correct color', async () => {
    const action = mockQuickAction();
    const color = faker.random.word();
    const {sut} = getInitialState({action, color});
    await waitFor(() => {
      const icon = sut.getByTestId(`icon-${action.icon}`);
      expect(icon).toBeDefined();
      expect(icon.props.fill).toBe(color);
    });
  });
});
