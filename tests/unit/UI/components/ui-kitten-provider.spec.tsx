import {UIKittenProvider} from '@/app/UI/shared/components/ui-kitten-provider';
import {cleanup, render, RenderAPI} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import {Text} from 'react-native';
import faker from 'faker';

type InitialState = {
  sut: RenderAPI;
};

type InitialStateParams = {
  darkMode?: boolean;
  children?: React.ReactNode;
};

const getInitialState = (params: InitialStateParams): InitialState => {
  const {darkMode, children} = params;
  const sut = render(
    <UIKittenProvider darkMode={darkMode}>{children}</UIKittenProvider>,
  );
  return {sut};
};

describe('UIKittenProvider', () => {
  afterEach(cleanup);

  test('should render children', () => {
    const {sut} = getInitialState({
      children: <Text testID="somechildren">Hello</Text>,
    });
    expect(sut.getByTestId('somechildren')).toBeDefined();
  });

  test('should change with dark mode prop', () => {
    const isDarkMode = faker.datatype.boolean();
    const {sut} = getInitialState({
      darkMode: isDarkMode,
      children: <Text testID="somechildren">{`${isDarkMode}`}</Text>,
    });
    expect(sut.getByText(`${isDarkMode}`)).toBeDefined();
  });
});
