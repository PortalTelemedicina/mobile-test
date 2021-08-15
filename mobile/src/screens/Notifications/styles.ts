import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0px 0px ${16 + getBottomSpace()}px 0px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContentHeader = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const ContentBody = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Segoe UI Bold';
  font-size: 32px;

  text-align: center;
`;

export const TitleBlue = styled(Title)`
  color: #7349e5;
`;

export const TitleBlush = styled(Title)`
  color: #E5495E;
`;