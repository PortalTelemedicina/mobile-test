import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function StyledButton({
  title,
  buttonColor,
  textColor,
  btnFn,
}) {
  return (
    <View style={[styles.container, { backgroundColor: `${buttonColor}` }]}>
      <TouchableOpacity
        onPress={btnFn}
      >
        <Text style={[styles.title, {color: `${textColor}`}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
