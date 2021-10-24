import {UIKittenProvider} from '@/app/UI/shared/components';
import {Router} from '@/app/UI/shared/routes';
import {GlobalStyles} from '@/app/UI/shared/styles/global-styles';
import '@/config/locale';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const isDarkMode = false;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <UIKittenProvider darkMode={isDarkMode}>
          <View style={GlobalStyles.container} testID="app-entrypoint">
            <Router />
          </View>
        </UIKittenProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
