import {mockQuickActions} from '@/../tests/mocks/helpers/mock-quick-actions';
import {ListQuickActionsSpy} from '@/../tests/mocks/spies/usecases/list-quick-actions-spy';
import {ListSpecialists} from '@/app/UI/pages';
import {UIKittenProvider} from '@/app/UI/shared/components';
import {cleanup, render, RenderAPI} from '@testing-library/react-native';
import React from 'react';
import 'react-native';

type InitialState = {
  sut: RenderAPI;
  listQuickActionsSpy: ListQuickActionsSpy;
};

const getInitialState = (): InitialState => {
  const listQuickActionsSpy = new ListQuickActionsSpy(mockQuickActions());
  const sut = render(
    <UIKittenProvider>
      <ListSpecialists listQuickActions={listQuickActionsSpy} />
    </UIKittenProvider>,
  );
  return {sut, listQuickActionsSpy};
};

describe('ListSpecialists', () => {
  afterEach(cleanup);

  test('should render with initial state', () => {
    const {sut} = getInitialState();
    expect(sut.getByText('Specialists')).toBeDefined();
    expect(sut.getByText('What do you need?')).toBeDefined();
  });

  test('should list quick actions correctly', () => {
    const {sut, listQuickActionsSpy} = getInitialState();
    expect(listQuickActionsSpy.calls).toBe(1);
    listQuickActionsSpy.quickActions.forEach(action => {
      expect(sut.getByText(action.title)).toBeDefined();
      const actionTouchable = sut.getByTestId(`action-${action.title}`);
      expect(actionTouchable.props.accessibilityState.disabled).toBe(
        !action.active,
      );
    });
  });
});
