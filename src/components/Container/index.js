import React from 'react'
import { StyledContainer } from './styles'

function Container({ children, ...rest }) {
  return <StyledContainer {...rest} >{children}</StyledContainer>
}

export default Container;
