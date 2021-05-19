import React from 'react';
import { Container, Content, SalutationText, UsernameText } from './styles';

const Header = (): JSX.Element => (
  <Container>
    <Content>
      <SalutationText>Hello,</SalutationText>
      <UsernameText>Lorelle Luna</UsernameText>
    </Content>
  </Container>
);
export default Header;
