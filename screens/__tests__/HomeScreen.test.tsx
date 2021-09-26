/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/extensions */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import axios from 'axios';
import renderer, { act } from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomeScreen from '../HomeScreen';
import specislistCategories from '../../docs/api/home_specialists.json';
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

describe('HomeScreen', () => {
  it('Load specilistCatgegoryList', async () => {
    mockedAxios.get.mockResolvedValue({
      data: specislistCategories,
    });

    let component;
    await act(async () => {
      // @ts-ignore
      component = renderWithProviders(<HomeScreen />);
    });
    // @ts-ignore: Object is possibly 'null'.
    const testInstance = component?.root;
    expect(testInstance.findByProps({ testID: 'specialist-category-0' })).toBeDefined();
    expect(testInstance.findByProps({ testID: 'specialist-category-1' })).toBeDefined();
    expect(testInstance.findByProps({ testID: 'specialist-category-2' })).toBeDefined();
    // @ts-ignore: Object is possibly 'null'.
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Internet error', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));
    let component;
    await act(async () => {
      // @ts-ignore
      component = renderWithProviders(<HomeScreen />);
    });

    // @ts-ignore: Object is possibly 'null'.
    const testInstance = component?.root;
    expect(testInstance.findByProps({ testID: 'msg.networkError' })).toBeDefined();

    // @ts-ignore: Object is possibly 'null'.
    // expect(component.toJSON()).toMatchSnapshot();
  });
});
