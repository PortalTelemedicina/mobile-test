import styled from 'styled-components/native';

import size from '@utils/size';

interface ButtonProps {
  color: string;
}

export const Container = styled.TouchableOpacity`
  height: ${size(42)}px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin-right: 20px;
  border-radius: 20px;
  background-color: ${(props: ButtonProps) => props.color};
`;
