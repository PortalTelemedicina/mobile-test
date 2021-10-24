import {SafeAreaContainer} from '@/app/UI/shared/components';
import {cleanup, render, RenderAPI} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import {Text} from 'react-native';

type InitialState = {
  sut: RenderAPI;
};

type InitialStateParams = {
  children?: React.ReactNode;
};

const getInitialState = (params: InitialStateParams): InitialState => {
  const {children} = params;
  const sut = render(<SafeAreaContainer>{children}</SafeAreaContainer>);
  return {sut};
};

describe('SafeAreaContainer', () => {
  afterEach(cleanup);

  test('should render children', () => {
    const {sut} = getInitialState({
      children: <Text testID="somechildren">Hello</Text>,
    });
    expect(sut.getByTestId('somechildren')).toBeDefined();
  });
});
