import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/FontAwesome5';
import { RectButton } from 'react-native-gesture-handler';

interface IconProps {
  HaveIcon: boolean;
}

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  padding: 0 10px;
  background: #E5495E;
  border-radius: 30px;
`;

export const ButtonText = styled.Text<IconProps>`
  flex: 1;
  color: #ffffff;

  font-family: 'Segoe UI Bold';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;

  ${props =>
    props.HaveIcon &&
    css`
      margin-left: 30px;
    `}
`;

export const Icon = styled(FeatherIcon)`
  margin: 0px 10px 0px 0px;
`;
