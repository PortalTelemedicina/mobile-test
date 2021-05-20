import React from 'react'
import { Container, Hello, Name } from './styles'
function Greetings({ name, ...rest }) {
  return (
    <Container {...rest}>
      <Hello>Hello,</Hello>
      <Name>{name}</Name>
    </Container>
  )
}

export default Greetings
