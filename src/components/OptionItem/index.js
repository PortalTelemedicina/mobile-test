import React from 'react'
import { gray, pink, white } from '~/styles/colors'
import Icon from '~/components/Icon'
import {
  Container,
  IconView,
  TitleView,
  Title
} from './styles'

function OptionItem({ icon, title, onPress, active, ...rest }) {

  function handlePress() {
    //onPress()
  }

  function getColor() {
    return active ? white : gray
  }

  return (
    <Container color={active ? pink : white} onPress={handlePress} {...rest}>
      <IconView>
        <Icon name={icon} size={25} color={getColor()} />
      </IconView>
      <TitleView>
        <Title active={active}>{title}</Title>
      </TitleView>
    </Container>
  )
}

export default OptionItem
