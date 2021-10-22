import React from 'react';
import 'react-native';
import App from '../App';
import {render} from '@testing-library/react-native';

it('renders correctly', () => {
  const {getByText} = render(<App />);
  expect(getByText('Home')).toBeDefined();
});
