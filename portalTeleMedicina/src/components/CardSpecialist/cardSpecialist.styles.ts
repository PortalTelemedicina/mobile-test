import styled from 'styled-components/native';

import size from '@utils/size';

interface CardSpecialistProps {
  color: string;
}

export const Container = styled.TouchableOpacity`
  height: ${size(170)}px;
  width: ${size(132)}px;
  padding: ${size(10)}px;
  margin-right: ${size(12)}px;
  border-radius: 16px;
  background-color: ${(props: CardSpecialistProps) => props.color};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const ContainerIcon = styled.View`
  height: ${size(52)}px;
  width: ${size(48)}px;
  margin-bottom: ${size(6)}px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({theme}) => theme.white};
`;