import React from 'react';

import Typography from '@components/Typography';

import { Container } from './circleName.styles';

interface CircleNameProps {
  name: string;
}

const CircleName = (props: CircleNameProps) => {
  const { name } = props;

  const getRandomColor = () => { 
    return 'rgb(' + (Math.floor(Math.random() * 256)) 
      + ',' + (Math.floor(Math.random() * 256)) 
      + ',' + (Math.floor(Math.random() * 256)) + ')'};
  
  const displayName = () => {
    const splited = name.split(' ');
    let displayName = '';

    if (splited.length > 1) {
      displayName = `${splited[0].charAt(0)}${splited[1].charAt(0)}`;
    } else {
      displayName = `${splited[0].charAt(0)}${splited[0].charAt(1)}`;
    }

    return displayName;
  };
  return (
    <Container style={{backgroundColor: getRandomColor()}}>
      <Typography variant='Ubuntu14'>{displayName()}</Typography>
    </Container>
  );
}

export default CircleName;