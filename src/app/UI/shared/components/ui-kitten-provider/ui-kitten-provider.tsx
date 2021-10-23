import {default as mappingIOS} from '@/app/UI/shared/styles/font-mapping-ios.json';
import {default as mappingAndroid} from '@/app/UI/shared/styles/font-mapping-android.json';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React from 'react';
import {Platform, StatusBar} from 'react-native';

type UIKittenProviderProps = {
  darkMode: boolean;
};

export const UIKittenProvider: React.FC<UIKittenProviderProps> = ({
  children,
  darkMode,
}) => {
  return (
    <>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={darkMode ? {...eva.dark} : {...eva.light}}
        // Library types are different from the (docs)[https://akveo.github.io/react-native-ui-kitten/docs/guides/branding#typography] spec.
        // @ts-ignore:next-line
        customMapping={Platform.OS === 'ios' ? mappingIOS : mappingAndroid}
      >
        {children}
      </ApplicationProvider>
    </>
  );
};
