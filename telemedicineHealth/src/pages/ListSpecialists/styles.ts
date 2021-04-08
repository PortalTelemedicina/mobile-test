import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export interface ListSpecialistsItemsProps {
  name: string;
  description: string;
  distance: number;
  actions: {
    chat: string;
    call?: string;
  };
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ContentText = styled.View`
  padding-left: 16px;
  margin-top: 20px;
`;

export const TextNameSpecialist = styled.Text`
  font-size: 20px;
  font-family: 'Segoe UI Semi-Bold';
  color: black;
`;

export const TextNameAmountFound = styled.Text`
  font-size: 22px;
  font-family: 'Segoe UI';
  color: black;
`;

export const Line = styled.View`
  margin-top: 10px;
  height: 5px;
  background-color: #f8f6f8;
  width: 100%;
`;

export const ListSpecialistsItems = styled(
  FlatList as new () => FlatList<ListSpecialistsItemsProps>,
).attrs({})`
  margin-top: 10px;
`;

// export const CardSpecialistList = styled(
//   FlatList as new () => FlatList<CardSpecialistsProps>,
// ).attrs({})`
//   margin-top: 10px;
// `;
