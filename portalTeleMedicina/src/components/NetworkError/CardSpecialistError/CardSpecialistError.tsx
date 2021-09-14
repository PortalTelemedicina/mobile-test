import React from 'react';

import Typography from '../../Typography';
import Button from '../../Button';

import { Container, CollumnWrapper } from './cardSpecialistError.styles';

interface CardSpecialistErrorProps {
  onPress: () => void;
}

const CardSpecialistError = (props: CardSpecialistErrorProps) => {
  const { onPress } = props;

  return (
    <Container>
      <Typography variant='Ubuntu20' color='darkBrown'>:(</Typography>

      <CollumnWrapper>
        <Typography variant='Ubuntu18' color='darkBrown'>Ops!</Typography>
        <Typography variant='Ubuntu14' color='darkBrown' style={{ marginBottom: 20 }}>Parece que houve uma falha na conexão com a internet</Typography>
        <Button title='Tentar novamente' color='#4b484e' titleColor='white' onPress={onPress}/>
      </CollumnWrapper>
    </Container>
  );
}

export default CardSpecialistError;