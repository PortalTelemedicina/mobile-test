import {ListQuickActionsSpy} from '@/../tests/mocks/spies/usecases/list-quick-actions-spy';
import {ListSpecialists} from '@/app/UI/pages';
import {ListSpecialistsProps} from '@/app/UI/pages/list-specialists/list-specialists';
import {UIKittenProvider} from '@/app/UI/shared/components';
import {cleanup, render, RenderAPI} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';
import 'react-native';

type InitialState = {
  sut: RenderAPI;
  listQuickActionsSpy: ListQuickActionsSpy;
};

const getInitialState = (): InitialState => {
  const listQuickActionsSpy = new ListQuickActionsSpy();
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

  test('should call ListQuickActions on initial render', () => {
    const {sut, listQuickActionsSpy} = getInitialState();
    expect(listQuickActionsSpy.calls).toBe(1);
  });
});
