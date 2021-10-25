import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import '@testing-library/jest-native/extend-expect';
import fetchMock from 'jest-fetch-mock';
import React from 'react';
import {View} from 'react-native';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import {initialize} from './src/config/locale';

fetchMock.enableMocks();

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.doMock('react-native-svg', () => {
  return {
    SvgUri: props => <View {...props} />,
  };
});

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  RN.NativeModules.SettingsManager = {settings: {AppleLocale: 'en_US'}};
  RN.NativeModules.I18nManager = {
    localeIdentifier: 'en_US',
    getConstants: () => ({interfaceIdiom: 'en'}),
  };
  return RN;
});

initialize();
