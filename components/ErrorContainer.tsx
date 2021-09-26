import React from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import { systemI18n, systemColors, systemLayout } from '../system';

import { TextContainer as Text } from './TextContainer';
import ButtonContainer from './ButtonContainer';
import IconContainer from './IconContainer';

export default function ErrorContainer({
  iconName,
  message,
  onPressTryAgain,
}: {
  iconName: any;
  message: string;
  onPressTryAgain: (event: GestureResponderEvent) => void;
}): JSX.Element {
  return (
    <View style={styles.errorContainer}>
      <View style={styles.errorIconContainer}>
        <IconContainer name={iconName} size={100} color={systemColors.brown} style={styles.errorIcon} />
      </View>
      <View style={styles.errorMessageContainer}>
        <Text style={styles.errorMsg} bold>
          {systemI18n.t('msg.ops')}
        </Text>
        <Text style={styles.errorMsg} testID={message}>
          {systemI18n.t(message)}
        </Text>
        <ButtonContainer title="btn.tryAgain" onPress={onPressTryAgain} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0,
    backgroundColor: systemColors.white,
    height: systemLayout.window.height / 4.5,
  },
  errorIconContainer: {
    flex: 0.3,
  },
  errorMessageContainer: {
    flex: 0.7,
    marginTop: 5,
    marginLeft: 10,
  },
  errorIcon: {
    textAlign: 'center',
  },
  errorMsg: {
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
    width: systemLayout.window.width / 2.5,
  },
});
