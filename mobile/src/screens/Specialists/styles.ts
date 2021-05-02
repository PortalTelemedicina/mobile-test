import styled from 'styled-components/native';
import { TextProps } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

import { Specialist } from '../../interfaces/specialist';

interface LabelCaptionProps extends TextProps {
  fontSize?: number;
  isBold?: boolean;
  color?: string;
}

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const HeaderBar = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const HeaderButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderMenu = styled.View`
  flex-direction: column;
  justify-content: center;

  padding: 20px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ContentBody = styled.View`
  flex: 1;
`;

export const HeaderTitleText = styled.Text`
  font-family: 'Segoe UI Bold';
  font-size: 20px;
  color: #504C4C;

  margin-top: 10px;
`;

export const HeaderSubTitleText = styled.Text`
  font-family: 'Segoe UI';
  font-size: 20px;
  color: #504C4C;

  margin-top: 10px;
`;

export const SpecialistListContainer = styled.View`
  flex: 1;
  background: #F6F8FA;
`;

export const SpecialistList = styled(FlatList as new () => FlatList<Specialist>)`
  flex: 1;
`;

export const SpecialistContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  height: 220px;

  padding: 10px;
  margin-top: 5px;

  background: #ffffff;
`;

export const SpecialistContainerUser = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SpecialistContainerDetail = styled.View`
  flex: 1;
  flex-direction: column;

  margin-left: 20px;
`;

export const SpecialistTitle = styled.Text`
  font-family: 'Segoe UI Bold';
  font-size: 20px;

  margin-top: 5px;

  color: #504C4C;
`;

export const SpecialistNick = styled.View`
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  border-radius: 30px;

  background: #E2DFFF;
`;

export const SpecialistNickSigla = styled.Text`
  font-family: 'Segoe UI Bold';
  font-size: 24px;

  color: #7349E5;
`;

export const SpecialistButtons = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  padding: 10px 0px;
`;

export const SpecialistButtonChat = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 40px;

  border-radius: 30px;

  background: #7349E5;
`;

export const SpecialistButtonCall = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 40px;

  border-radius: 30px;
  margin-left: 10px;

  background: #eeeeee;
`;

export const LabelCaption = styled.Text<LabelCaptionProps>`
  font-family: ${ props => (props.isBold ? 'Segoe UI Bold' : 'Segoe UI') };
  font-size: ${ props => props.fontSize || 14 }px;
  color: ${ props => props.color || '#504C4C' };

  padding: 5px 0px;
`;

export const IconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
`;