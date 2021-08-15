import styled from 'styled-components/native';
import { Platform, TextProps } from 'react-native';

import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

import { FlatList } from 'react-native-gesture-handler';

import { Specialty } from '../../interfaces/specialty';

interface LabelCaptionProps extends TextProps {
  fontSize?: number;
  isBold?: boolean;
  color?: string;
}

interface SpecialtiesProps {
  color?: string;
}

interface NeedContainerProps {
  color?: string;
}

export const Container = styled.View`
  flex: 1;
  padding: 0px 0px ${16 + getBottomSpace()}px 0px;
`;

export const HeaderBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
  padding-top: ${Platform.OS === 'android' ? 0 : getStatusBarHeight()}px;
`;

export const HeaderMenu = styled.View`
  flex-direction: column;
  justify-content: center;

  padding: 20px 0;
`;

export const HeaderMenuButton = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  padding: 10px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentHeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 10px 20px;
`;

export const ContentHeaderTitleText = styled.Text`
  font-family: 'Segoe UI Bold';
  font-size: 20px;
  color: #504C4C;

  margin-top: 10px;
`;

export const ContentBody = styled.View`
  flex: 1;
  padding-bottom: 50px;
`;

export const ContentFooter = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UserTitleHello = styled.Text`
  font-family: 'Segoe UI';
  font-size: 32px;
  color: #504C4C;

  margin-top: 10px;
`;

export const UserTitleName = styled.Text`
  font-family: 'Segoe UI Bold';
  font-size: 32px;
  color: #504C4C;

  margin-top: 10px;
`;

export const CategoryListContainer = styled.View`
  flex: 1;
`;

export const CategoryList = styled(FlatList as new () => FlatList<Specialty>)`
  padding: 10px;
`;

export const CategoryContainer = styled.TouchableOpacity<SpecialtiesProps>`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 150px;
  height: 190px;

  padding: 10px;
  margin-right: 15px;
  border-radius: 15px;

  background: ${ props => props.color || '#CA49E5' };
`;

export const CategoryImage = styled.View`
  width: 50px;
  height: 60px;

  margin-right: 10px;
  border-radius: 15px;

  padding: 5px;

  background: #ffffff;
`;

export const CategoryTitle = styled.Text`
  font-family: 'Segoe UI Bold';
  font-size: 20px;

  margin-top: 5px;

  color: #ffffff;
`;

export const NeedHorizontalContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 10px;
`;

export const NeedContainer = styled.TouchableOpacity<NeedContainerProps>`
  flex-direction: column;
  justify-content: center;
  align-items: center;  

  width: 31%;
  height: 130px;

  margin-bottom: 10px;

  border-radius: 15px;

  background: ${ props => props.color || '#ffffff' };
`;

export const NeedImage = styled.View`
  width: 60px;
  height: 60px;

  padding: 5px;
`;

export const NeedTitle = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 10px;
`;

export const NeedTitleText = styled.Text<LabelCaptionProps>`
  font-family: 'Segoe UI Bold';
  font-size: 12px;
  line-height: 15px;

  color: ${ props => props.color || '#7C8494' };
`;

export const LabelCaption = styled.Text<LabelCaptionProps>`
  font-family: ${ props => (props.isBold ? 'Segoe UI Bold' : 'Segoe UI') };
  font-size: ${ props => props.fontSize || 14 }px;
  color: ${ props => props.color || '#ffffff' };

  margin-top: 10px;
`;
