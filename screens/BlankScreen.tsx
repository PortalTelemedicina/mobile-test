import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextContainer as Text } from '../components/TextContainer';

export default function BlankScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blank</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
