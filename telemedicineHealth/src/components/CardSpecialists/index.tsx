import React from 'react';
import { View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import {
  Container,
  Title,
  SpecialtyCard,
  SpecialtyCardImageContent,
  SpecialtyCardImage,
  SpecialtyCardName,
  SpecialtyCardAmount,
} from './styles';

interface CardSpecialistsProps {
  testId: string;
  color: string;
  image_url: string;
  total: number;
  name: string;
  onPress?: () => void;
}

const CardSpecialists = ({
  testId,
  color,
  image_url,
  name,
  total,
  onPress,
}: CardSpecialistsProps): JSX.Element => {
  return (
    <Container onPress={onPress} testID={testId} activeOpacity={0.9}>
      <SpecialtyCard backgroundColor={color}>
        <View style={{ marginTop: 10, marginLeft: 10, width: '100%' }}>
          <SpecialtyCardImageContent>
            <SvgUri width="70%" height="70%" fill={color} uri={image_url} />
          </SpecialtyCardImageContent>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              maxWidth: '100%',
            }}
          >
            <SpecialtyCardName lineBreakMode="clip" numberOfLines={2}>
              {name}
            </SpecialtyCardName>
          </View>
          <SpecialtyCardAmount>{total} Doctors</SpecialtyCardAmount>
        </View>
      </SpecialtyCard>
    </Container>
  );
};

export default CardSpecialists;
