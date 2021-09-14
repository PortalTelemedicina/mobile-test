import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SvgUri } from 'react-native-svg';

import Typography from '../Typography/Typography';

import { Container, ContainerIcon } from './cardSpecialist.styles';

interface CardProps extends TouchableOpacityProps{
  name?: string;
  color: string;
  total?: number;
  image?: string;
}

const CardSpecialist = (props: CardProps) => {
  const { name, color, total, image, ...restProps } = props;


  return (
    <Container activeOpacity={0.9} color={color ? color : '#d43e'} {...restProps}>
      <ContainerIcon>
        <SvgUri uri={image} height={10} width={10}/>
      </ContainerIcon>
      <Typography variant='Ubuntu18'>{name}</Typography>
      <Typography variant='Ubuntu14' style={{marginTop: 6}}>{total} Doctors</Typography>
    </Container>
  );
}

export default CardSpecialist;