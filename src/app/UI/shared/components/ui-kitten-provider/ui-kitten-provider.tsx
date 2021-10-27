import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React from 'react';
import {StatusBar} from 'react-native';
import {useAppTheme} from '../../state/theme-context';

type UIKittenProviderProps = {};

export const UIKittenProvider: React.FC<UIKittenProviderProps> = ({
  children,
}) => {
  const {darkMode} = useAppTheme();
  return (
    <>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={darkMode ? {...eva.dark} : {...eva.light}}
      >
        {children}
      </ApplicationProvider>
    </>
  );
};
