import {GlobalStyles} from '@/app/UI/shared/styles/global-styles';
import {useTheme} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView} from 'react-native';

export const SafeAreaContainer = ({children}) => {
  const theme = useTheme();

  return (
    <>
      <SafeAreaView
        testID="safearea-top"
        style={[
          GlobalStyles.topSafeArea,
          {
            backgroundColor: theme['background-basic-color-1'],
          },
        ]}
      />
      <SafeAreaView
        testID="safearea-bottom"
        style={[
          GlobalStyles.bottomSafeArea,
          {backgroundColor: theme['background-basic-color-2']},
        ]}
      >
        {children}
      </SafeAreaView>
    </>
  );
};
