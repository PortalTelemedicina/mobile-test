import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

interface TitleProps {
  fontSize?: number;
  isBold?: boolean;
}

export const Container = styled.View`
  flex: 1;

  /* padding: 0px 0px ${16 + getBottomSpace()}px; */
  background: #001d5b;
`;

export const NotifyButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  color: #ffffff;
`;

export const NotifyIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export const Header = styled.View`
  /* align-items: center; */
  justify-content: center;

  padding: 24px;
  padding-top: ${Platform.OS === 'android' ? 24 : getStatusBarHeight() + 24}px;

  /* background: #adff2f; */
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;

  margin-top: 30px;

  /* background: #8ca8d2; */
`;

export const HeaderCarrousel = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-left: 30px;

  /* background: #8ca8d2; */
`;

export const HeaderBalanceInfo = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  /* background: #f474; */
`;

export const HeaderBalanceText = styled.Text<TitleProps>`
  text-align: center;
  /* line-height: 34px; */

  font-size: ${props => props.fontSize || 14}px;
  font-family: ${props => (props.isBold ? 'Poppins-Bold' : 'Poppins-Regular')};

  color: #ffffff;
`;

export const HeaderBalanceDetail = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* background: #ffffff; */
`;

export const Balance = styled.View`
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  padding: 0 10px;

  /* background: #ffffff; */
`;

export const EyeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  padding: 15px;
`;

export const EyeIcon = styled.Image`
  width: 18px;
  height: 18px;
`;

export const Content = styled.View`
  flex: 1;
  /* align-items: center; */
  justify-content: center;

  padding: 30px;
`;

export const ContentBody = styled.View`
  flex: 1;
  justify-content: center;

  /* background: #008; */
`;

export const ContentFooter = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  background: #b41256;
`;

export const Menu = styled.View`
  justify-content: center;
  padding: 10px;
`;

export const Options = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  /* background: #eee8aa; */
`;

export const OptionContainer = styled.View`
  align-items: center;
  justify-content: center;

  padding: 10px;
  margin: 5px 5px;

  /* background: #89ab; */
`;

export const Option = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 55px;
  height: 55px;

  border: 1px solid;
  border-color: #00d931;
  border-radius: 22px;

  /* background: #cbeee9; */
`;

export const OptionIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const OptionText = styled.Text`
  font-size: 13px;
  font-family: 'DMSans-Medium';
  line-height: 34px;

  color: #ffffff;
`;

export const Title = styled.Text<TitleProps>`
  font-family: 'Poppins-Bold';
  font-size: 32px;

  text-align: center;

  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `}

  color: #000000;
`;

export const Footer = styled.View`
  /* align-items: center; */
  /* justify-content: center; */
`;

export const Services = styled.View`
  align-items: center;
  justify-content: center;

  height: 180px;

  border-top-left-radius: 22px;
  border-top-right-radius: 22px;

  background: #ffffff;
`;

export const TitleBlue = styled(Title)`
  color: #001d5b;
`;

export const TitleGreen = styled(Title)`
  color: #00d931;
`;
