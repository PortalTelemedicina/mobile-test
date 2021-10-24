import {LoginI18n, translate} from '@/config/locale';
import {Button, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';

const Login = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <Text category="h1" testID="title">
        {translate(LoginI18n.title)}
      </Text>
      <Button
        testID="btn_login"
        size="large"
        style={styles.button}
        onPress={() => navigation.navigate('HOME')}
      >
        Sign In
      </Button>
    </Layout>
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

export default Login;
