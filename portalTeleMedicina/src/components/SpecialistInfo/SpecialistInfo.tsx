import React from 'react';
import { Linking } from 'react-native'

import CircleName from '../CircleName';
import Typography from '../Typography';
import Button from '../Button';

import { Container, ContentContainer, ButtonContainer } from './specialistInfo.styles';

interface SpecialistInfoProps {
  name: string;
  distance: number;
  description: string;
  chat: string;
  call: string;
}

const SpecialistInfo = (props: SpecialistInfoProps) => {
  const { name, distance, description, chat, call } = props;

  return (
    <Container>
      <CircleName name={name}/>

      <ContentContainer>
        <Typography variant='Ubuntu14' color='darkBrown'>{name}</Typography>
        <Typography variant='Ubuntu10' color='grayLight' style={{ marginTop: 10 }}>Near By {distance}km</Typography>
        <Typography variant='Ubuntu12' color='darkGray' style={{ marginTop: 10, paddingRight: 30 }}>{description}</Typography>
      
        <ButtonContainer>
          <Button title='Chat' color='#000' titleColor='white'/>
          <Button title='Call' color='#F5F5F5' titleColor='darkBrown' onPress={() => Linking.openURL(`tel:${call}`)}/>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
}

export default SpecialistInfo;