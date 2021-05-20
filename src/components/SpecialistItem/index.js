import React from 'react'
import { light_gray, purple, white } from '~/styles/colors'
import {
  Container,
  AvatarView,
  Avatar,
  AvatarText,
  ContentView,
  Name,
  Description,
  Distance,
  ButtonContainer,
  Button,
  ButtonLabel
} from './styles'

function SpecialistItem({
  data,
  onPressChatButton,
  onPressCallButton,
  ...rest
}) {
  function handleCallPress() {
    onPressCallButton(data)
  }

  function handleChatPress() {
    onPressChatButton(data)
  }

  function getAvatar() {
    const names = data.name.split(' ')
    const avatar = names.map(name => name[0])
    return avatar
  }

  return (
    <Container>
      <AvatarView>
        <Avatar color={'#e3dfff'}>
          <AvatarText color={'#8074f8'}>{getAvatar()}</AvatarText>
        </Avatar>
      </AvatarView>
      <ContentView>
        <Name>{data.name}</Name>
        <Distance>Nearby {data.distance} miles</Distance>
        <Description>{data.description}</Description>
        <ButtonContainer>
          <Button color={purple}>
            <ButtonLabel color={white}>Chat</ButtonLabel>
          </Button>
          <Button color={white}>
            <ButtonLabel color={light_gray}>Call</ButtonLabel>
          </Button>
        </ButtonContainer>
      </ContentView>
    </Container>
  )
}

export default SpecialistItem
