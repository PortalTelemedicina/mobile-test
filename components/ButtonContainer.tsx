import React from 'react';
import { View, GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';
import { TextContainer as Text } from '../components/TextContainer';
import { systemI18n, systemColors } from '../system';

export default function ButtonContainer({
  title,
  onPress,
  secundary,
  style,
}: {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  secundary?: boolean;
  style?: React.ComponentProps<typeof View>['style'];
}): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, secundary ? styles.buttonSecundary : null, style]}>
        <Text style={[styles.buttonTitle, secundary ? styles.buttonSecondaryTitle : null]}>{systemI18n.t(title)}</Text>
      </View>
    </TouchableOpacity>
  );
}

ButtonContainer.defaultProps = { secundary: false, style: null };

const styles = StyleSheet.create({
  button: {
    backgroundColor: systemColors.brown,
    borderWidth: 1,
    borderColor: systemColors.brown,
    borderRadius: 25,
    padding: 5,
    justifyContent: 'center',
  },
  buttonTitle: {
    color: systemColors.white,
    textAlign: 'center',
  },
  buttonSecundary: {
    backgroundColor: systemColors.white,
  },
  buttonSecondaryTitle: {
    color: systemColors.brown,
  },
});
