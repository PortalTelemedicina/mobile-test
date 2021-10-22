/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleProp,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from '@/home-screen';

const App = () => {
  const [count, setCount] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text testID="title">Home</Text>
        <Text testID="count">{count}</Text>
        <Button
          testID="btn-count"
          title="press me"
          onPress={() => setCount(prevCount => prevCount + 1)}
        />
      </View>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
