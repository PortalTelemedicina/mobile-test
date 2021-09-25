/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/extensions */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import axios from 'axios';
import renderer, { act } from 'react-test-renderer';
import { Provider } from 'react-redux';
/// import { useNetInfo } from '@react-native-community/netinfo';
import SpecialistListScreen from '../SpecialistListScreen';
import specialists from '../../docs/api/list_specialist_dermatology.json';
import store from '../../helpers/TestUtils';

function renderWithProviders(ui: JSX.Element) {
  return renderer.create(<Provider store={store}>{ui}</Provider>);
}

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    MaterialCommunityIcons: View,
  };
});

jest.useFakeTimers();

const route = {
  params: {
    category: 'Dermatology Specialist',
  },
};

describe('SpecilistListScreen', () => {
  it('Load specilistList', async () => {
    mockedAxios.get.mockResolvedValue({
      data: specialists,
    });

    let component;
    await act(async () => {
      // @ts-ignore
      component = renderWithProviders(<SpecialistListScreen route={route} />);
    });

    // @ts-ignore
    const testInstance = component?.root;

    expect(testInstance.findByProps({ testID: 'specialist-0' })).toBeDefined();
    expect(testInstance.findByProps({ testID: 'specialist-1' })).toBeDefined();
    expect(testInstance.findByProps({ testID: 'specialist-2' })).toBeDefined();
    expect(testInstance.findByProps({ testID: 'specialist-3' })).toBeDefined();
  });
});
