import {HomeBottomBar, UIKittenProvider} from '@/app/UI/shared/components';
import {HomeBottomBarProps} from '@/app/UI/shared/components/home-bottom-bar/home-bottom-bar';
import {
  cleanup,
  fireEvent,
  render,
  RenderAPI,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';
import 'react-native';

type InitialState = {
  sut: RenderAPI;
};

const getInitialState = (params: HomeBottomBarProps): InitialState => {
  const {currentIndex, onSelect} = params;
  const sut = render(
    <UIKittenProvider>
      <HomeBottomBar currentIndex={currentIndex} onSelect={onSelect} />
    </UIKittenProvider>,
  );
  return {sut};
};

describe('HomeBottomBar', () => {
  afterEach(cleanup);

  test('should render with tabs', () => {
    const mockFn = jest.fn();
    const {sut} = getInitialState({
      currentIndex: 0,
      onSelect: mockFn,
    });
    expect(sut.getByTestId('tab-appointment')).toBeDefined();
    expect(sut.getByTestId('tab-chat')).toBeDefined();
    expect(sut.getByTestId('tab-activity')).toBeDefined();
    expect(sut.getByTestId('tab-menu')).toBeDefined();
  });

  test('should navigate to tab on press', async () => {
    const mockFn = jest.fn();
    const {sut} = getInitialState({
      currentIndex: 0,
      onSelect: mockFn,
    });

    const menuTab = sut.getByTestId('tab-menu');

    await waitFor(() => {
      fireEvent.press(menuTab);
    });

    expect(mockFn).toHaveBeenCalled();
  });
});
