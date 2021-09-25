import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShimmerContainer from './ShimmerContainer';

export default function SpecialistListShimmer(): JSX.Element {
  return (
    <View style={styles.list}>
      {specialistCardShimmer()}
      {specialistCardShimmer()}
      {specialistCardShimmer()}
      {specialistCardShimmer()}
    </View>
  );
}

function specialistCardShimmer() {
  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <ShimmerContainer style={styles.cardCircle} />
      </View>
      <View style={styles.cardRight}>
        <ShimmerContainer style={styles.cardName} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  card: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
    marginRight: 4,
  },
  cardLeft: {
    flex: 0.18,
  },
  cardRight: {
    flex: 0.82,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    borderRadius: 25,
    width: '100%',
    height: '100%',
  },
  cardCircle: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
});
