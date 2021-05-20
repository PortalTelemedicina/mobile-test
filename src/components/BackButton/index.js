import React from 'react'
import { gray } from '~/styles/colors'
import Icon from '~/components/Icon'
import { Container } from './styles'

function BackButton({ onPress, ...rest }) {
  return (
    <Container onPress={onPress} {...rest}>
      <Icon
        name='back'
        size={20}
        color={gray}
      />
    </Container>
  )
}

export default BackButton
