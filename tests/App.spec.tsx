import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import App from '@/app/main';

it('renders correctly', () => {
  const {getByText} = render(<App />);
  expect(getByText('Home')).toBeDefined();
});
