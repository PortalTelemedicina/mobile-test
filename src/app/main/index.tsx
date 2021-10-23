import {UIKittenProvider} from '@/app/UI/shared/components/ui-kitten-provider/ui-kitten-provider';
import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {SafeAreaView, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Logo from '@/assets/icons/ambulance.svg';

const App = () => {
  const [count, setCount] = useState(0);
  const isDarkMode = false;

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <>
      <UIKittenProvider darkMode={isDarkMode}>
        <SafeAreaView style={backgroundStyle}>
          <Layout style={styles.container}>
            <Text category="h1" testID="title">
              Home
            </Text>
            <Text style={styles.couter} category="s1" testID="count">
              {count}
            </Text>
            <Button
              style={styles.button}
              onPress={() => setCount(prevCount => prevCount + 1)}
              accessoryLeft={props => (
                <Icon name="plus-square-outline" {...props} />
              )}
            >
              Add
            </Button>
            <Logo width={100} height={100} fill={'#1e1e1e'} />
          </Layout>
        </SafeAreaView>
      </UIKittenProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  couter: {marginTop: 20},
  button: {marginTop: 20},
});

export default App;
