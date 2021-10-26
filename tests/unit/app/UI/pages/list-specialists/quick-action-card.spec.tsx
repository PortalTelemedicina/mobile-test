import {mockQuickAction} from '@/../tests/mocks/helpers/mock-quick-actions';
import QuickActionCard, {
  QuickActionCardProps,
} from '@/app/UI/pages/list-specialists/components/quick-action-card';
import {UIKittenProvider} from '@/app/UI/shared/components';
import {
  cleanup,
  fireEvent,
  render,
  RenderAPI,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';

type InitialState = {
  sut: RenderAPI;
};

const getInitialState = (params: QuickActionCardProps): InitialState => {
  const {
    action = mockQuickAction(),
    onPress = jest.fn(),
    loading = true,
  } = params;
  const sut = render(
    <UIKittenProvider>
      <QuickActionCard action={action} onPress={onPress} loading={loading} />
    </UIKittenProvider>,
  );
  return {sut};
};

describe('QuickActionCard', () => {
  afterEach(cleanup);

  test('should render with initial state', async () => {
    const {sut} = getInitialState({});
    await waitFor(() => {
      expect(sut.getByTestId('container-loading')).toBeDefined();
    });
  });

  test('should render correct action', async () => {
    const fakeAction = mockQuickAction();
    const {sut} = getInitialState({
      action: fakeAction,
      loading: false,
    });
    await waitFor(() => {
      const touchable = sut.getByTestId(`action-${fakeAction.title}`);
      expect(touchable).toBeDefined();
      expect(sut.getByText(fakeAction.title)).toBeDefined();
      expect(sut.getByTestId(`icon-${fakeAction.icon}`)).toBeDefined();
      expect(touchable.props.accessibilityState.disabled).toBe(
        !fakeAction.active,
      );
    });
  });

  test('should call onPress if taps action', async () => {
    const fakeFn = jest.fn();
    const fakeAction = mockQuickAction();
    fakeAction.active = true;
    const {sut} = getInitialState({
      action: fakeAction,
      loading: false,
      onPress: fakeFn,
    });
    await waitFor(() => {
      const touchable = sut.getByTestId(`action-${fakeAction.title}`);
      fireEvent.press(touchable);
      expect(fakeFn).toHaveBeenCalled();
    });
  });
});
