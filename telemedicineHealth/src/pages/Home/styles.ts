import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export interface CardSpecialistsProps {
  color: string;
  image_url: string;
  total: number;
  name: string;
}

interface CardAttendanceListProps {
  color: string;
  image_url: string;
  name: string;
  id: number;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f8f6f8;
  padding-left: 16px;
`;
export const Title = styled.Text`
  font-size: 18px;
  color: #555252;
  font-family: 'Segoe UI Bold';
`;

export const CardSpecialistList = styled(
  FlatList as new () => FlatList<CardSpecialistsProps>,
).attrs({})`
  margin-top: 10px;
`;

export const ContentCardAttendance = styled.View`
  margin-top: 40px;
`;

export const TextQuestion = styled.Text`
  font-family: 'Segoe UI Bold';
  font-size: 20px;
`;

export const CardAttendanceList = styled(
  FlatList as new () => FlatList<CardAttendanceListProps>,
).attrs({
  numColumns: 3,
})`
  margin-top: 20px;
`;
