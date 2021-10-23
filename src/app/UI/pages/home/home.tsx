import {
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  useTheme,
} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../shared/styles/global-styles';

const Home = ({navigation}) => {
  const theme = useTheme();
  const back = () => {
    navigation.goBack();
  };

  return (
    <>
      <SafeAreaView
        style={[
          GlobalStyles.topSafeArea,
          {
            backgroundColor: theme['background-basic-color-1'],
          },
        ]}
      />
      <SafeAreaView
        style={[
          GlobalStyles.bottomSafeArea,
          {backgroundColor: theme['background-basic-color-2']},
        ]}
      >
        <TopNavigation
          style={styles.headerContainer}
          title={() => <Text category="h6">Hi there!</Text>}
          accessoryRight={() => (
            <TopNavigationAction
              onPress={back}
              icon={props => <Icon {...props} name="log-out-outline" />}
            />
          )}
        />
        <Divider />
        <Layout level="2" style={styles.container}>
          <Button onPress={back}>Sign Out</Button>
        </Layout>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {paddingHorizontal: 20},
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Home;
