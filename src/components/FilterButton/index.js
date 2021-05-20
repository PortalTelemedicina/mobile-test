import React from 'react'
import { gray } from '~/styles/colors'
import Icon from '~/components/Icon'
import { Container } from './styles'

function FilterButton({ onPress, ...rest }) {
  return (
    <Container {...rest}>
      <Icon
        onPress={onPress}
        name='filter'
        size={20}
        color={gray}
      />
    </Container>
  )
}

export default FilterButton
