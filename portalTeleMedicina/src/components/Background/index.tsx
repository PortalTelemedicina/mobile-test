import React from 'react';

import { Container } from './styles';

const Background = (props) => {
  return (
    <Container >
      {props.children}
    </Container>
  );
};

export default Background;
