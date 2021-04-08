import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  ContainerButton,
  ButtonCall,
  ButtonChat,
  ContentViewInfo,
  ContentViewInitialName,
  TextInitialName,
  TextApproximation,
  TextButtonCall,
  TextButtonChat,
  TextDescription,
  TextName,
  Line,
} from './styles';

interface CardTypeSpecialistProps {
  testId: string;
  name: string;
  description: string;
  distance: number;
}

const CardTypeSpecialist = ({
  testId,
  description,
  distance,
  name,
}: CardTypeSpecialistProps): JSX.Element => {
  return (
    <Container testID={testId}>
      <Content>
        <View
          style={{ display: 'flex', flexDirection: 'row', paddingLeft: 16 }}
        >
          <ContentViewInitialName>
            <TextInitialName>{name.substr(0, 1)}</TextInitialName>
          </ContentViewInitialName>

          <ContentViewInfo>
            <View style={{ width: '90%', maxWidth: '100%' }}>
              <TextName>{name}</TextName>
              <TextApproximation>Nearby {distance} miles</TextApproximation>
              <TextDescription>{description}</TextDescription>
              <ContainerButton>
                <ButtonChat>
                  <TextButtonChat>Chat</TextButtonChat>
                </ButtonChat>
                <ButtonCall>
                  <TextButtonCall>Call</TextButtonCall>
                </ButtonCall>
              </ContainerButton>
            </View>
          </ContentViewInfo>
        </View>
      </Content>
      <Line />
    </Container>
  );
};

export default CardTypeSpecialist;
