import styled from 'styled-components/native';

import size from '@utils/size'

export const Container = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
  margin-top: ${size(30)}px;
  border-bottom-width: 1px;
  border-bottom-color: #e6e6e6;
`;

export const ContentContainer = styled.View`
  padding-left: ${size(8)}px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: ${size(30)}px;
`;
