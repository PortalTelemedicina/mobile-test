import React from 'react';
import { useNavigation } from '@react-navigation/native';

import BackIcon from '@assets/icons/back-arrow.svg';
import PersonIcon from '@assets/icons/person.svg';

import { Container, Button } from './header.styles';

interface HeaderProps {
  loading?: boolean;
}

const Header = (props: HeaderProps) => {
  const { loading } = props;

  const { goBack } = useNavigation();

  return (
    <Container>
      <Button onPress={() => goBack()}>
        <BackIcon />
      </Button>
      {!loading && <PersonIcon />}
    </Container>
  );
}

export default Header;