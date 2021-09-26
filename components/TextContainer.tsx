/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Text as DefaultText } from 'react-native';

import { systemColors } from '../system';

export function TextContainer(props: any): JSX.Element {
  const { style, bold, ...otherProps } = props;
  const color = systemColors.brown;
  const fontFamily = bold ? 'ubuntu-bold' : 'ubuntu';
  return <DefaultText style={[{ color, fontFamily }, style]} {...otherProps} />;
}
