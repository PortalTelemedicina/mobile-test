import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size='large' color='#CA49E5'/>
    </Container>
  );
}

export default Loading;
