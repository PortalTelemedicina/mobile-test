import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, Icon } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ children, icon, ...props }) => (
  <Container {...props}>
    <ButtonText HaveIcon={!!icon}>{ children }</ButtonText>
    <Icon name={icon} size={20} color="#ffffff" solid />
  </Container>
);

export default Button;
