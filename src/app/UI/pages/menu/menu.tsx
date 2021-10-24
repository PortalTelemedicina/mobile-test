import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';

const Menu = ({}) => {
  return (
    <Layout level="1" style={styles.container}>
      <Text category="h1">Menu</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Menu;
