import {UIKittenProvider} from '@/app/UI/shared/components';
import {Router} from '@/app/UI/shared/routes';
import {GlobalStyles} from '@/app/UI/shared/styles/global-styles';
import '@/config/locale';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeContextProvider} from '../UI/shared/state/theme-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <NavigationContainer>
          <UIKittenProvider>
            <View style={GlobalStyles.container} testID="app-entrypoint">
              <Router />
            </View>
          </UIKittenProvider>
        </NavigationContainer>
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
