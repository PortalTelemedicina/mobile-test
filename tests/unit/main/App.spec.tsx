import App from '@/app/main';
import {render, RenderAPI} from '@testing-library/react-native';
import React from 'react';
import 'react-native';

type InitialState = {
  sut: RenderAPI;
};

const getInitialState = (): InitialState => {
  const sut = render(<App />);
  return {sut};
};

describe('App', () => {
  test('should render correctly', () => {
    const {sut} = getInitialState();
    expect(sut.getByText('Home')).toBeDefined();
  });
});
