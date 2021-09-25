import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShimmerContainer from './ShimmerContainer';
import { systemLayout } from '../system';

export default function SpecialistCategoryListShimmer(): JSX.Element {
  return (
    <View style={styles.container}>
      <ShimmerContainer style={styles.card} />
      <ShimmerContainer style={styles.card} />
      <ShimmerContainer style={styles.card} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: systemLayout.window.height / 4.5,
  },
  card: {
    flex: 1,
    flexWrap: 'nowrap',
    height: systemLayout.window.height / 4.5,
    width: systemLayout.window.width / 3,
    marginRight: 10,
    borderRadius: 10,
  },
});
