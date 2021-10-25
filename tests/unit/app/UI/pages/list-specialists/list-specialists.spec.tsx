import {ListSpecialists} from '@/app/UI/pages';
import {ListSpecialistsProps} from '@/app/UI/pages/list-specialists/list-specialists';
import {UIKittenProvider} from '@/app/UI/shared/components';
import {cleanup, render, RenderAPI} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';
import 'react-native';

type InitialState = {
  sut: RenderAPI;
};

const getInitialState = (params: ListSpecialistsProps): InitialState => {
  const sut = render(
    <UIKittenProvider>
      <ListSpecialists />
    </UIKittenProvider>,
  );
  return {sut};
};

describe('ListSpecialists', () => {
  afterEach(cleanup);

  test('should render with initial state', () => {
    const {sut} = getInitialState({});
    expect(sut.getByText('Specialists')).toBeDefined();
    expect(sut.getByText('What do you need?')).toBeDefined();
  });
});
