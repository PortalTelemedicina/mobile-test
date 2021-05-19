import React from 'react';
import { SvgUri } from 'react-native-svg';
import { View } from 'react-native';
import {
  Container,
  CardAttendanceItem,
  CardAttendanceContent,
  CardImage,
  CardTextAttendance,
} from './styles';

type CardAttendanceProps = {
  image_url: string;
  typeAttendance: string;
  color: string;
};

const CardAttendance = ({
  image_url,
  typeAttendance,
  color,
}: CardAttendanceProps): JSX.Element => (
  <Container>
    <CardAttendanceItem color={color}>
      <CardAttendanceContent>
        <SvgUri
          width="50%"
          height="50%"
          fill={color !== '#fff' ? '#fff' : 'black'}
          uri={image_url}
        />

        <CardTextAttendance colorTextCard={color !== '#fff' ? '#fff' : 'black'}>
          {typeAttendance}
        </CardTextAttendance>
      </CardAttendanceContent>
    </CardAttendanceItem>
  </Container>
);

export default CardAttendance;
