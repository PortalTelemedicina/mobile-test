import styled from 'styled-components/native'
import { light_gray } from '~/styles/colors';

export const List = styled.FlatList`
  padding-top: 10px;
`

export const ItemSeparator = styled.View`
  height: 1px;
  background-color: ${light_gray};
`;
