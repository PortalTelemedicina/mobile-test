import React from 'react';

import Typography from '../../Typography';
import Button from '../../Button';

import { Container } from './specialistInfoError.styles';

interface SpecialistInfoErrorProps {
  onPress: () => void;
}

const SpecialistInfoError = (props: SpecialistInfoErrorProps) => {
  const { onPress } = props;

  return (
    <Container>
       <Typography variant='Ubuntu20' color='darkBrown' style={{ marginBottom: 20 }}>:(</Typography>

       <Typography variant='Ubuntu18' color='darkBrown' style={{ marginBottom: 20 }}>Ops!</Typography>
        <Typography variant='Ubuntu14' color='darkBrown' style={{ marginBottom: 20, textAlign: 'center' }}>Parece que houve uma falha de conexão com a internet</Typography>
        <Button title='Tentar novamente' color='#4b484e' titleColor='white' onPress={onPress}/>
    </Container>
  );
}

export default SpecialistInfoError;