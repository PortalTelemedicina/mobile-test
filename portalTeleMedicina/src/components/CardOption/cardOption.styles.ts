import styled from 'styled-components/native';

import size from '@utils/size';
import color from '@themes/theme';

interface CardSpecialistProps {
  color: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: ${size(110)}px;
  width: ${size(110)}px;
  justify-content: center;
  align-items: center;
  padding: ${size(10)}px;
  margin-bottom: ${size(20)}px;
  border-radius: 16px;
  background-color: ${(props: CardSpecialistProps) => props.color ? color.darkBrown : color.ice};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`;
