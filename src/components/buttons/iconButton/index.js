import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

export default function IconButton({
  icon,
  btnFn,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={btnFn}>
        <Image source={icon} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}
