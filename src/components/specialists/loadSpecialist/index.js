import React from 'react';
import { View} from 'react-native';

import styles from './styles';


export default function LoadSpecialist() {

  return (
    <View style={styles.container}>
      <View style={styles.profile} />
      <View style={styles.info}>
        <View style={styles.name} />
        <View style={styles.description} />
        <View style={styles.line} />
      </View>
    </View>
  );
}
