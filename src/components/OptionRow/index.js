import React from 'react'
import { Container } from './styles'

function OptionRow({ children, ...rest }) {
  return <Container {...rest} >{children}</Container>
}

export default OptionRow;
