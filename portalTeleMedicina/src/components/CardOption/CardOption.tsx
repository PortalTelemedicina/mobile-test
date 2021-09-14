import React from 'react';

import Typography from '../Typography';

import { Container } from './cardOption.styles';

interface CardOptionsProps {
  title: string;
  icon: Object; 
  isDarkGrey?: boolean;
}

const CardOption = (props: CardOptionsProps) => {
  const {title, icon, isDarkGrey} = props;

  return (
    <Container color={isDarkGrey}>
      {icon}
      <Typography variant='Ubuntu14' style={{marginTop: 10}} color={isDarkGrey ? 'white' : 'darkBrown'}>{title}</Typography>
    </Container>
  );
}

export default CardOption;