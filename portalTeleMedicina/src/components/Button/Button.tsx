import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import Typography from '@components/Typography';
import theme from '@themes/theme';

import { Container } from './button.styles';

interface ButtonProps extends TouchableOpacityProps{
  color: string;
  title: string;
  titleColor: keyof typeof theme;
}

const Button = (props: ButtonProps) => {
  const {color, title, titleColor,...restProps} = props;

  return (
    <Container activeOpacity={0.9} color={color} {...restProps}>
      <Typography style={{marginRight: 30, marginLeft: 30}} variant='Ubuntu14' color={titleColor}>{title}</Typography>
    </Container>
  );
}

export default Button;