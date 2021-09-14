import React from 'react';

import size from '@utils/size';
import Shimmer from '@shimmers';

import { Container, ContentContainer } from './specialistInfoShimmer.styles';

const SpecialistInfoShimmer = () => {
  return (
    <>
   <Container>
      <Shimmer style={{ height: size(44),
         width: size(44), borderRadius: 22 }}/>
      <ContentContainer>
        <Shimmer style={{ height: size(44),
          width: '150%', borderRadius: 16}}/>
        <Shimmer style={{ height: size(52),
          width: '150%', borderRadius: 16, marginTop: 4}}/>
      </ContentContainer>
    </Container>

    <Container>
      <Shimmer style={{ height: size(44),
         width: size(44), borderRadius: 22 }}/>
      <ContentContainer>
        <Shimmer style={{ height: size(44),
          width: '150%', borderRadius: 16}}/>
        <Shimmer style={{ height: size(52),
          width: '150%', borderRadius: 16, marginTop: 4}}/>
      </ContentContainer>
    </Container>

    <Container>
      <Shimmer style={{ height: size(44),
         width: size(44), borderRadius: 22 }}/>
      <ContentContainer>
        <Shimmer style={{ height: size(44),
          width: '150%', borderRadius: 16}}/>
        <Shimmer style={{ height: size(52),
          width: '150%', borderRadius: 16, marginTop: 4}}/>
      </ContentContainer>
    </Container>

    </>
  );
}

export default SpecialistInfoShimmer;