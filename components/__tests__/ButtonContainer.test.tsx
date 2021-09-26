import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { systemI18n } from '../../system';
import ButtonContainer from '../ButtonContainer';

it('functions as a button', () => {
  const onPress = jest.fn();
  const out = render(<ButtonContainer onPress={onPress} title="msg.UnitTest" />);
  fireEvent.press(out.getByText(systemI18n.t('msg.UnitTest')));
  expect(onPress).toBeCalled();
});
