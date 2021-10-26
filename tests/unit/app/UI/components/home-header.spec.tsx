import {
  HomeHeader,
  HomeHeaderProps,
  UIKittenProvider,
} from '@/app/UI/shared/components';
import {
  cleanup,
  fireEvent,
  render,
  RenderAPI,
  waitFor,
} from '@testing-library/react-native';
import faker from 'faker';
import React from 'react';

type InitialState = {
  sut: RenderAPI;
};

const getInitialState = (params: HomeHeaderProps): InitialState => {
  const {name, onLogoutPress} = params;
  const sut = render(
    <UIKittenProvider>
      <HomeHeader name={name} onLogoutPress={onLogoutPress} />
    </UIKittenProvider>,
  );
  return {sut};
};

describe('HomeHeader', () => {
  afterEach(cleanup);

  test('should render with user name', () => {
    const fakeName = faker.name.findName();
    const {sut} = getInitialState({name: fakeName});
    expect(sut.getByText(fakeName)).toBeDefined();
  });

  test('should handle logout taps correctly', async () => {
    const fakeFN = jest.fn();
    const {sut} = getInitialState({onLogoutPress: fakeFN});
    const logoutButton = sut.getByTestId('btn-logout');
    await waitFor(() => {
      fireEvent.press(logoutButton);
    });
    expect(fakeFN).toHaveBeenCalled();
  });
});
