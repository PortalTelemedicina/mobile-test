import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

interface PaginationItemProps {
  isFocused: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 100px 0px ${16 + getBottomSpace()}px 0px;

  /* background: #009688; */
`;

export const ContentHeader = styled.View`
  flex: 2;
  max-height: 380px;
  align-items: center;
  justify-content: center;

  padding: 30px;

  /* background: #ff9; */
`;

export const ContentBody = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;

  /* padding: 30px; */

  /* background: #008; */
`;

export const ContentFooter = styled.View`
  /* flex: 1; */
  align-items: center;
  justify-content: flex-end;

  padding: 30px;

  /* background: #b41256; */
`;

export const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 32px;

  text-align: center;

  margin: 10px 0px 10px;
`;

export const TitleBlue = styled(Title)`
  color: #001d5b;
`;

export const TitleGreen = styled(Title)`
  color: #00d931;
`;

export const Description = styled.Text`
  color: #171717;

  font-family: 'DMSans-Medium';
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 23px;
  text-align: center;

  opacity: 0.6;

  /* margin: 10px 0px 20px; */
`;

export const Pagination = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  padding: 0 10px;
  margin: 20px 0px 10px 0px;

  /* background: #ff9000; */
`;

export const PaginationItem = styled(RectButton)<PaginationItemProps>`
  width: 8px;
  height: 5px;
  background: #8f92a1;
  border-radius: 10px;

  ${props =>
    props.isFocused &&
    css`
      width: 16px;
      background: #001d5b;
    `}

  margin: 0px 5px 0px 0px;
`;
