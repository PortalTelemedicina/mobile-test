import React from 'react';

import { Container } from './cardSpecialistShimmer.styles';

import size from '@utils/size';
import Shimmer from '@shimmers';

const CardSpecialistShimmer = () => {
  return (
    <Container>
      <Shimmer style={{ height: size(170),
         width: size(132), borderRadius: 16 }}/>
      <Shimmer style={{ height: size(170),
         width: size(132), borderRadius: 16, marginLeft: 12 }}/>
      <Shimmer style={{ height: size(170),
         width: size(132), borderRadius: 16, marginLeft: 12 }}/>
    </Container>
  );
}

export default CardSpecialistShimmer;